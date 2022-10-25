var curent_step = 0
var steps = document.querySelectorAll('.step')
var taskslist = document.querySelector('#taskslist')
var controls = document.querySelector('#controls')
var task_done = true

function next() {
    if (curent_step < steps.length - 1) {
        curent_step++
        task_done = false
    }
}

function validateanswer(selector, ans) {
    var filled = document.querySelector(`${selector} .question`).value

    if(filled == ans) 
        document.querySelector(`${selector} .answer`).innerHTML = '<span style="color:green">Correct Answer</span>'
    else 
        document.querySelector(`${selector} .answer`).innerHTML = `<span style="color:red">Wrong Answer</span>, Correct answer is  ${document.querySelector(`${selector} .question`).item(ans).innerHTML}`

    gsap.to(selector, { delay: 2, duration: 1,  opacity: 0 })

    task_done = true
}

function addTask(task) {
    var taskli = document.createElement('li')
    taskli.innerHTML = task

    taskslist.appendChild(taskli)
}


setInterval(() => {
    for (let i = 0; i < steps.length; i++) {
        if (i == curent_step)
            steps[i].classList.add('active')
        else
            steps[i].classList.remove('active')
    }
    
    if (task_done)
        controls.classList.add('active')
    else
        controls.classList.remove('active')

}, 100)
