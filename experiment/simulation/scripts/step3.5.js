var filled = false

function suckitandsee() {
    if (!filled) {
        gsap.to('#step-3-5-pipette small', { opacity: 0 })

        var anim = gsap.timeline()
        anim
        .to('#step-3-5-pipette', {duration: 1, x: 50, y: -50})
        .to('#step-3-5-pipette', {duration: 1, x: 120})
        .to('#pipetteButton', {y:10})
        .to('#step-3-5-pipette', {duration: 1, y: -20})
        .to('#pipetteButton', {y:0})
        .to('#step-3-5-pipette', {duration: 1, y: -50})
        .to('#step-3-5-pipette', {duration: 1, x: 50})
        .to('#step-3-5-pipette', { duration: 1,  x: 0, y: 0})
        .to('#step-3-5-pipette small', {opacity: 1, onComplete: () => {
            filled = true
            document.querySelector('#step-3-5-pipette small').innerHTML = 'click to add KI solution'
        }})
    }
    else{
        gsap.to('#step-3-5-pipette small', { opacity: 0 })

        var anim = gsap.timeline()
        anim
        .to("#step-3-5-pipette", {duration: 1, x: -100, y: -50})
        .to("#step-3-5-pipette", {duration: 1, x: -150})
        .to('#pipetteButton', {y:10})
        .to('#step-3-5-pipette', {duration: 1, y: -20})
        .to('#pipetteButton', {y:0})
        .to('#step-3-5-pipette', {duration: 1, y: -50})
        .to('#step-3-5-pipette', {duration: 1, x: 0, y: 0, onComplete: () => {
            task_done = true
            addTask('<b>Step 4</b> Add 0.5 ml saturated KI solution and shake it for 1 min')
        }})
    }
}