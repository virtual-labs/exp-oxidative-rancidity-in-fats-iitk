var hotplateon = false
var flaskPlacedOnBurner = false

var frameObject6 = { i: 0 }

function turnOnHotPlate() {
    document.querySelector('#hotplate1 img').src = './assets/hot plate on.png'
    hotplateon = true

    gsap.to('#hotplate1 small', { opacity: 0 })
    gsap.to('#step-1-5-flask small', { opacity: 1 })
}

function placeFlaskOnBurner() {
    if (hotplateon) {
        if (!flaskPlacedOnBurner) {
            gsap.to('#step-1-5-flask small', { opacity: 0 })

            var anim = gsap.timeline()
            anim
                .to('#step-1-5-flask', { duration: 1, x: -160, y: -60 })
                .to('#step-1-5-flask', { duration: 1, y: -40 })
                .to(frameObject6, {
                    duration: 4, i: 2, ease: new SteppedEase.config(2), onUpdate: () => {
                        document.querySelector('#step-1-5-flask img').src = `./assets/ghee melting/${frameObject6.i}.png`
                    },
                    onComplete: () => {
                        gsap.to('.question-1', { opacity: 1 })

                        task_done = true
                        addTask('<b>Step 1-1</b> Heat the mixture upto boiling condition')
                    }
                })
        }
    }
}