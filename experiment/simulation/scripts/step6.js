var prefferedReading = [
    2.8,
    5.8,
    9.6,
    1.2
]

var readingTitration = 0.0
var handle = null

var S1 = 0

var currentFrame = 16
var buretteFilled = false

var frameObject5 = { i: 0 }

function buretteFill() {
    if (!buretteFilled) {
        var anim = gsap.timeline()

        anim
            .to('#naoh small', { opacity: 0 })
            .to('#naoh', { duration: 2, y: -220 })
            .to('#naoh', { duration: 2, x: -150 })
            .to('#naoh', {
                duration: 2, rotation: -20, onComplete: () => {
                    gsap.to(frameObject5, {
                        duration: 4, i: 16, ease: new SteppedEase.config(16), onUpdate: () => {
                            document.querySelector('#burettestep6').src = `./assets/burette/ff${frameObject5.i}.png`
                        }
                    })
                }
            })
            .to('#naoh', { duration: 2, rotation: 0 })
            .to('#naoh', { duration: 4, x: 0, y: 0 })
            .to('#step-6 button.element', { opacity: 1 })
    }
}


function openKnob() {
    if (handle == null && !buretteFilled) {
        handle = setInterval(() => {
            if (readingTitration < 50.0) {
                readingTitration += 0.2
                document.querySelector('#readingSlider').style.width = `${100 - readingTitration * 5}%`

                var drop = document.createElement("img")
                drop.src = './assets/drop.png'
                drop.classList.add('element', 'drop-step-6')
                drop.style.zIndex = 5

                document.querySelector('#step-6 .instruments').appendChild(drop)

                gsap.to(drop, { y: 50, opacity: 0, ease: Sine.easeIn })

                var text = ''
                if (Math.abs(prefferedReading[selectedSample] - readingTitration) <= 0.2) {
                    text += '(Titration Completed) '

                    document.querySelector('#step-6-flask').src = `./assets/white flask.png`
                }

                if (currentFrame > 0) {
                    currentFrame--

                    document.querySelector('#burettestep6').src = `./assets/burette/ff${currentFrame}.png`
                }

                text += `${readingTitration.toPrecision(2)} ml`

                document.querySelector('#readingText').innerHTML = text
                console.log(prefferedReading[selectedSample], readingTitration)
            }
        }, 2000);
    }
}

function closeKnob() {
    if (handle != null) {
        clearInterval(handle);
        handle = null

        if (Math.abs(prefferedReading[selectedSample] - readingTitration) <= 0.2) {
            task_done = true
            S1 = readingTitration
            addTask('<b>Step 6</b> Titrate the mixture with 0.1 N sodium thio-sulphate solution until yellow color is almost gone')
          //  addTask('🎉 Experiment Complete 🎉')
        }
    }
}