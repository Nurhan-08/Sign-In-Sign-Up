const baa = prompt("Баа бериниз")
const baalar = [5, 4, 3]

if (baa==3){
    alert('Орточо')
}else if(baa==4){
    alert('Жакшы')
}else if(baa==5){
    alert('Эн жакшы')
}else if (baalar<baa){
    alert('Туура эмес сан')
}else if (baa<baalar){
    alert('Туура эмес сан')
}else{
    alert("Баа бериш керек болчу")
}

console.log(baa);