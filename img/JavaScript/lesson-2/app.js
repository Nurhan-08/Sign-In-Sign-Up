
// mini bank 

const elcard = {
    balance: 5000,
    pin: 2008
}

const pin = prompt("Введите пин код")

// boolean - true false

if (elcard.pin == pin){
    // true
    alert('Добро пожаловать')
    const som = prompt("Введите сумму")
    console.log(som,'---som---');
    if (som < elcard.balance){
         elcard.balance = elcard.balance - som
    alert('Остаток на карте ' + elcard.balance)
    }
    else{
        alert("У вас недостаточно на балансе")
    }
   
} 
else{
    // false
    alert('Неверный пароль')
}

console.log(pin);











switch(color){
    case "Кызыл": {
        alert("Токто !!!")
        break;
    }

    case "Жашыл": {
        alert("Откконго болот !!!")
        break;
    }

    case "Сары": {
        alert("Даярдан !!!")
        break;
    }

    default: {
        alert ("Эки жакты карап отуу керек")
    }

}





// Циклы (5) жана методы массива (pop , push , unshift , shift)