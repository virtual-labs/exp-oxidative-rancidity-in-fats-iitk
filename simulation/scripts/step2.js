var reading = 0.0
var sample = 0.0

//var alcoholAdded = false
var flaskAdded = false
var animating = false
var sampleHovering = false

var frameObject = { i: 0 }

function hoverSample() {
    if (!sampleHovering && flaskAdded) {
        var anim = gsap.timeline()
        anim
            .to('#sampleimage > small', { duration: .25, opacity: 0 })
            .to('#sampleimage', {
                duration: 1, y: -100, x: -230, onComplete: () => {
                    sampleHovering = true
                }
            })

    }
}

function addSample() {
    if (!task_done) {
        if (flaskAdded && !animating && sampleHovering) {
            if (reading < 10.0) {

                var drop = document.createElement("img")
                drop.src = './assets/drop.png'
                drop.classList.add('element', 'drop-step-2')
                drop.style.zIndex = 5

                var anim1 = gsap.timeline()
                anim1
                    .to('#sampleimage', {
                        duration: 2, rotation: -60, onComplete: () => {
                            document.querySelector('#step-2 .instruments').appendChild(drop)
                            reading += 2.5
                            sample += 2.5

                            animating = true
                            common()
                        }
                    })
                    .to(drop, {
                        y: 50, opacity: 0, repeat: 2, ease: Sine.easeIn, onStart: () => {
                            if (frameObject.i == 0) {
                                gsap.to(frameObject, {
                                    duration: 2, i: 2, ease: new SteppedEase.config(2), onUpdate: () => {
                                        document.querySelector('#step-2-flask').src = `./assets/${flaskSamples[selectedSample]}/${frameObject.i}.png`
                                    }
                                })
                            } else if (frameObject.i == 2) {
                                gsap.to(frameObject, {
                                    i: 3, ease: new SteppedEase.config(1), onUpdate: () => {
                                        document.querySelector('#step-2-flask').src = `./assets/${flaskSamples[selectedSample]}/${frameObject.i}.png`
                                    }
                                })
                            }
                        }
                    })
                    .to('#sampleimage', { duration: 2, rotation: 0, onComplete: () => animating = false })
            }
        }
    }
}

function removeSample() {
    if (!task_done) {
        if (flaskAdded && sampleHovering) {
            if (reading > 0.0) {
                reading -= .5
                sample -= .5
            }
            common()
        }
    }
}

function zeroReading() {
    if (!task_done) {
        if (flaskAdded) {
            reading = 0.0
        }
        common()
    }
}

function common() {
    document.querySelector('#sample-reading').innerHTML = `${reading.toPrecision(2)}`

    if (sample == 5.0) {
        gsap.to('#sampleimage', {
            duration: 2, x: 0, y: 0, rotation: 0, delay: "+3", onComplete: () => {
                gsap.to('.question-2', { opacity: 1 })

                addTask('<b>Step 2</b> Weigh 5g of Oil/Fat sample in conical flask')
            }
        })
    }
    else
        task_done = false
}

function placeFlask() {
    if (!flaskAdded) {
        var readingObj = { x: 0 }
        gsap.to('#placeflask > small', { duration: .25, opacity: 0 })

        var anim1 = gsap.timeline()
        anim1
            .to('#placeflask', { duration: 2, y: -100, x: -160, onStart: () => animating = true })
            .to('#placeflask', { duration: 1, y: -40 })
            .to('#sampleimage > small', { duration: .25, opacity: 1 })
            .to('#step-2 button.element', { duration: 1, opacity: 1 })
            .to(readingObj, {
                duration: .25, ease: new SteppedEase.config(10), x: 10, onUpdate: () => {
                    reading = readingObj.x
                    common()
                },
                onComplete: () => {
                    animating = false
                }
            })

        flaskAdded = true
    }
}