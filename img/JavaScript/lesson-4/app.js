// виды функции 3
// 1 function decloration --- function someName(){}
// 2 function expression -- const someName = function(){}
// 3 arrow function -- () => {}
// params









//1)

// function summa (){
//     console.log( 100 + 50);
// }
// summa();


// function bolyy () {
//     console.log( 500 / 5)
// }
// bolyy ();


// function koboityy() {
//     console.log( 567 * 67);
// }
// koboityy();

// function minus (){
//     console.log( 566 - 78);
// }
// minus ();












//2)

// const summa = function (a,b) {
//     console.log(500 + 30);
//     console.log(a + b);                               //NaN  ---- Not a Number
// }
// summa(1000, 2000);





//params






//3)

// const summa2 = (number1, number2) => {
//     console.log(500 + 130);
//     console.log(number1 + number2);
// }
// summa2(500, 500)












//return

// let numbers = [22, 45, 1]


// function findNumber(array, number) {
//     for (let i = 0; i < 3; i++) {
//         if (array[i] === number) {
//             console.log(array[i], "index" + i);
//         }
//     }
// }

// findNumber(numbers, 45)












// shift + alt + f








// let names = ['Medina', 'Eldar', 'Mahabat ', 'Iman',]

// function findName(array1, name) {
//     let isHas = false
//     for (let i = 0; i < 4; i++) {
//         if (array1[i] === name) {
//             isHas = true
//             console.log(name[i], "index" + i);
//         }
//     }
//     if (isHas == false) {
//         console.log(name + " is not definet");
//     }
// } findName(names, "Alex");








// function findLongName(array, length) {
//     let simbol = 0
//     let firstName = array[0] // Medina - 5


//     for (let i = 1; i < 4; i++) {
//         // 5 < 7 - true
//         // 5 > 5 - false
//         // 5 < 4 - false

//         if (firstName.length < array[i].length) {
//             firstName = array[i]
//         }
//     }
//     console.log(firstName);
// }
// findLongName(names)



//DOM