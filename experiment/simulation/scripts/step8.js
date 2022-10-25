var filled5 = false

function suckitandsee2() {
    if (!filled5) {
        gsap.to('#step-8-pipette small', { opacity: 0 })

        var anim = gsap.timeline()
        anim
        .to('#starchCap', {y: -50})
        .to('#step-8-pipette', {duration: 1, x: 50, y: -50})
        .to('#step-8-pipette', {duration: 1, x: 120})
        .to('#pipetteButton2', {y:10})
        .to('#step-8-pipette', {duration: 1, y: -20})
        .to('#pipetteButton2', {y:0})
        .to('#step-8-pipette', {duration: 1, y: -50})
        .to('#step-8-pipette', {duration: 1, x: 50})
        .to('#step-8-pipette', { duration: 1,  x: 0, y: 0})
        .to('#starchCap', {y: 0})
        .to('#step-8-pipette small', {opacity: 1, onComplete: () => {
            filled5 = true
            document.querySelector('#step-8-pipette small').innerHTML = 'click to add solution'
        }})
    }
    else{
        gsap.to('#step-8-pipette small', { opacity: 0 })

        var anim = gsap.timeline()
        anim
        .to("#step-8-pipette", {duration: 1, x: -100, y: -50})
        .to("#step-8-pipette", {duration: 1, x: -150})
        .to('#pipetteButton2', {y:10})
        .to('#step-8-pipette', {duration: 1, y: -20})
        .to('#pipetteButton2', {y:0})
        .to('#step-8-pipette', {duration: 1, y: -50})
        .to('#step-8-pipette', {duration: 1, x: 0, y: 0, onComplete: () => {
            gsap.to('.question-4', { opacity: 1 })

            document.querySelector('#step-8-flask').src = './assets/blue bottle.png'

            addTask('<b>Step 7</b>Add 0.5 ml 1% starch solution')
        }})
    }
}