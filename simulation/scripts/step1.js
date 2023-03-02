var sampleImages = [
    './assets/Fresh Oil.png',
    './assets/1passoil.png',
    './assets/2passoil.png',
    './assets/fresh ghee.png',
]

var flaskSamples = [
    'Fresh Oil',
    '1 pass',
    '2 pass',
    '3 pass'
]

var selectedSample = null

function selectSample(sender, id) {
    if (selectedSample == null) {
        selectedSample = id
        task_done = true

        if(selectedSample == 3) {
            document.querySelector('#potential-step').classList.add('potential-step')
            document.querySelector('#potential-step').classList.add('step')

            steps = document.querySelectorAll('.step')
        }

        gsap.to('.step1-tools .tooltiptext', { opacity: 0 })
        gsap.to(sender, {
            duration: 1, y: -100, ease: Back.easeOut.config(1.7)
        })

        document.querySelector('#sampleimage img').src = sampleImages[id]
        document.querySelector('#step3flask img').src = `./assets/${flaskSamples[id]}/3.png`
        document.querySelector('#step-3-5-flask').src = `./assets/${flaskSamples[id]}/alcohol/2.png`
        document.querySelector('#step-3-9-flask img').src = `./assets/${flaskSamples[id]}/alcohol/2.png`
        document.querySelector('#step-6-flask').src = `./assets/${flaskSamples[id]}/alcohol/2.png`
        document.querySelector('#observationSample').innerHTML = `${flaskSamples[id]}`
        addTask('<b>Step 1</b> Sample selection')
    }
}