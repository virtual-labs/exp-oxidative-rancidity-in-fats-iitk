var poured = false

function pourPhenolphthalein(params) {
    if(!poured)  {
        var drop = document.createElement("img")
        drop.src = './assets/pink drop.png'
        drop.classList.add('element', 'drop-step-5')
        drop.style.zIndex = 5

        gsap.to('#step5flask small', {opacity: 0})

        var anim = gsap.timeline()

        anim
            .to('#phenolphthalein', { duration: 2, x: -80, y: -70 })
            .to('#phenolphthalein', {
                rotation: -45, onComplete: () => {
                    document.querySelector('#step-5 .instruments').appendChild(drop)
                }
            })
            .to(drop, { y: 30, opacity: 0 })
            .to('#phenolphthalein', { rotation: 0 })
            .to('#phenolphthalein', {
                duration: 2, x: 0, y: 0, onComplete: () => {
                    poured = true
                    task_done = true

                    addTask('<b>Step 6</b> Add 2-3 drops of phenolpthalein indicator in hot condition')
                }
            })
    }
}