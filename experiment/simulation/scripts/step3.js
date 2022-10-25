var alcoholMeasured = false

var frameObject1 = { i: 1 }
var frameObject2 = { i: 1 }

function measureAlcohol() {
    if (!alcoholMeasured) {
        var drop = document.createElement("img")
        drop.src = './assets/drop.png'
        drop.classList.add('element', 'drop-step-3')
        drop.style.zIndex = 5

        gsap.to('#measuring small', { opacity: 0 })

        var anim = gsap.timeline()

        anim
            .to('#alcoholCabottleCap', { y: -50 })
            .to('#alcoholbottle', { duration: 2, x: -120, y: -50 })
            .to('#alcoholbottle', {
                rotation: -45, onComplete: () => {
                    document.querySelector('#step-3 .instruments').appendChild(drop)
                }
            })
            .to(drop, {
                repeat: 4, y: 50, opacity: 0, ease: Sine.easeIn, onStart: () => {
                    gsap.to(frameObject1, {
                        duration: 2, i: 5, ease: new SteppedEase.config(4), onUpdate: () => {
                            document.querySelector('#measuring img').src = `./assets/cylinder/c${frameObject1.i}.png`
                        }
                    })
                }
            })
            .to('#alcoholbottle', {
                rotation: 0, onStart: () => {
                    alcoholMeasured = true
                }
            })
            .to('#alcoholbottle', { duration: 2, x: 0, y: 0 })
            .to('#alcoholCabottleCap', {y: 0})
            //  .to('#step-3 #arrowHand2', {x: -130})
            .to('#step3flask small', { opacity: 1 })

    }
}

function pourAlcohol() {
    if (alcoholMeasured && !task_done) {
        var drop = document.createElement("img")
        drop.src = './assets/drop.png'
        drop.classList.add('element', 'drop-step-31')
        drop.style.zIndex = 5

        var anim = gsap.timeline()

        anim
            .to('#measuring', { duration: 1, y: -50, x: -80 })
            .to('#measuring', {
                duration: 1, rotation: -30, onComplete: () => {
                    document.querySelector('#step-3 .instruments').appendChild(drop)
                }
            })
            .to(drop, {
                repeat: 4, y: 50, opacity: 0, ease: Sine.easeIn, onStart: () => {
                    frameObject1.i = 5

                    gsap.to(frameObject1, {
                        duration: 2, i: 1, ease: new SteppedEase.config(4), onUpdate: () => {
                            document.querySelector('#measuring img').src = `./assets/cylinder/c${frameObject1.i}.png`
                        }
                    })

                    gsap.to(frameObject2, {
                        duration: 2, i: 2, ease: new SteppedEase.config(1), onUpdate: () => {
                            document.querySelector('#step3flask img').src = `./assets/${flaskSamples[selectedSample]}/alcohol/${frameObject2.i}.png`
                        }
                    })
                }
            })
            .to('#measuring', { rotation: 0 })
            .to('#measuring', {
                duration: 1, x: 0, y: 0, onComplete: () => {
                    gsap.to('.question-3', { opacity: 1 })

                    addTask('<b>Step 3</b> Add 50 ml ethyl alcohol in conical flask')
                }
            })
            .to('#step3flask small', { opacity: 0 })

    }
}