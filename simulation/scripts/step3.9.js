var waterMeasured = false


function measureWater() {
    if (!waterMeasured) {

        var drop = document.createElement("img")
        drop.src = './assets/drop.png'
        drop.classList.add('element', 'drop-step-3')
        drop.style.zIndex = 5

        gsap.to('#measuring2 small', { opacity: 0 })

        var anim = gsap.timeline()

        anim
            .to('#waterBottleCap', {duration: 1, y: -100})
            .to('#waterBottle', { duration: 2, x: -100, y: -50 })
            .to('#waterBottle', {
                rotation: -45, onComplete: () => {
                    document.querySelector('#step-3-9 .instruments').appendChild(drop)
                }
            })
            .to(drop, { y: 50, opacity: 0 })
            .to('#waterBottle', { rotation: 0 })
            .to('#waterBottle', {
                duration: 2, x: 0, y: 0, onComplete: () => {
                    waterMeasured = true
                }
            })
            .to('#waterBottleCap', {duration: 1, y: 0})
            .to('#step-3-9-flask small', { opacity: 1 })

    }
}

function pourWater() {
    if (waterMeasured && !task_done) {

        var drop = document.createElement("img")
        drop.src = './assets/drop.png'
        drop.classList.add('element', 'drop-step-31')
        drop.style.zIndex = 5

        var anim = gsap.timeline()

        anim
            .to('#measuring2', { duration: 1, y: -50, x: -80 })
            .to('#measuring2', {
                duration: 1, rotation: -30, onComplete: () => {
                    document.querySelector('#step-3-9 .instruments').appendChild(drop)
                }
            })
            .to(drop, { y: 50, opacity: 0 })
            .to('#measuring2', { rotation: 0 })
            .to('#measuring2', {
                duration: 1, x: 0, y: 0, onComplete: () => {
                    task_done = true
                    addTask('<b>Step 5</b> Add 30 ml distilled water')
                }
            })
            .to('#step-3-9-flask small', { opacity: 0 })

    }
}