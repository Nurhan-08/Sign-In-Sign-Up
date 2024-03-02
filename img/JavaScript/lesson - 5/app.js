// DOM Elements
const modal = document.querySelector(".modal-sign-in")  //class
const btn_one = document.querySelector(".btn-in")     //class # tag
const inputs = document.querySelectorAll("input")         // inputs //tag
const m_btn_one = document.getElementById('sign-in')      // #sign

console.log(inputs);
const inputTel = inputs[0]
const inputPass = inputs[1]



let isOpen = false


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
    isOpen = !isOpen
    if (isOpen === true) {
        modal.style.display = "block"
    } else {
        modal.style.display = 'none'
    }
    modal.style.display
}






const spans = document.getElementById("icons")

spans.onclick = function () {
    if (inputPass.type == 'password'){
        inputPass.type = 'text';
        spans.style.display = "block"
    }
    else{
        inputPass.type = "password"
    }
}