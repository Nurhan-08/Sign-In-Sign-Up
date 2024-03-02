// DOM Elements
const modal = document.querySelector("#modal-1")
const modal2 = document.querySelector("#modal-2")
const btn_one = document.querySelector(".btn-in")     //class # tag
const inputs = document.querySelectorAll("input")         // inputs //tag
const m_btn_one = document.getElementById('sign-in')
const m_btn_2 = document.getElementById('btn-m-2')
const icon = document.getElementById("icons")
const modal3 = document.querySelector("#modal-3")
const for1 = document.querySelector(".forgot-text")
const icon2 = document.getElementById("icons2")
const inp = document.getElementById("inputs2")
const sp = document.getElementById('icons3')
const inp_1 = document.getElementById("inputs3")
const send = document.getElementById ("repeatSend")



const pSecond = document.getElementById("second")
let timer = 40
let timerID;
function startTimer(){
    timerID = setInterval( () => {
        if (timer !== 0){
              console.log(timer--);
              pSecond.innerText = timer
        }
        if(timer === 0 ) clearInterval(timerID)
        if(timer === 30){
            alert(Math.ceil( Math.random() * 9999 ))
        }
    } , 1000)
}




send.onclick = () => {
    timer = 40
    startTimer()
}









console.log(inputs);
const inputTel = inputs[0]
const inputPass = inputs[1]


let isOpenModal1 = false
let isOpenModal2 = false
let isOpenIcon = false
let isOpenModal3 = false
let isOpenIcon_2 = false
let isOpenIcon3 = false


icon2.onclick = () => {
    isOpenIcon_2 = !isOpenIcon_2
    if(isOpenIcon_2 === true){
        inp.type = "text"
        icon2.innerHTML = ` <img src="./img/eva.png" alt="" />`
    }else{
        inp.type = "password"
        icon2.innerHTML = ` <img src= "./img/eva2.png"  alt="" />`
    }
}


sp.onclick = () => {
    isOpenIcon3 = !isOpenIcon3
    if(isOpenIcon3 === true){
        inp_1.type = "text"
        sp.innerHTML = ` <img src="./img/eva.png" alt="" />`
    }else{
        inp_1.type = "password"
        sp.innerHTML = ` <img src= "./img/eva2.png"  alt="" />`
    }
}


for1.onclick = () => {
isOpenModal3 = !isOpenModal3
modal.style.display = "none"
modal3.style.display = isOpenModal3 ? "block" : "none"
startTimer()
}


m_btn_2.onclick = () => {
    isOpenModal2 = !isOpenModal2
    modal.style.display = "none"
    modal3.style.display = "none"
    modal2.style.display = isOpenModal2 ? "block" : "none"
}



icon.onclick = () => {
    isOpenIcon = !isOpenIcon
    if(isOpenIcon === true){
        inputPass.type = "text"
        icon.innerHTML = ` <img src="./img/eva.png" alt="" />`
    }else{
        inputPass.type = "password"
        icon.innerHTML = ` <img src= "./img/eva2.png"  alt="" />`
    }
}



const user = {
    userName: "Alex",
    phone: "+996555558860",
    password: "ali56"
}



m_btn_one.onclick = () => {
    console.log(inputTel.value);
    console.log(inputPass.value);
    if (user.phone === inputTel.value && user.password === inputPass.value) {
        [inputTel, inputPass].forEach((input) => {
            input.style.border = "1px solid green"
        })
        alert(' Hello ' + user.userName)
    } else {
        [inputTel, inputPass].forEach((input) => {
            input.style.border = "1px solid red"
        })
    }
}



btn_one.onclick = function () {
    isOpenModal1 = !isOpenModal1
    modal2.style.display = "none"
    modal3.style.display = "none"
    if (isOpenModal1 === true) {
        modal.style.display = "block"
    } else {
        modal.style.display = 'none'
    }
    modal.style.display
}