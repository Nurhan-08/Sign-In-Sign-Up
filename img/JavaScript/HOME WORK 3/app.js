const num = [22, 45, 32, 454, 3232, 15, 2]
let maxNumber = num [0]
for (let i = 0; i < num.length; i++){
    if(maxNumber < num[i]){
        maxNumber = num[i]
    }
    console.log(num[i]);
}
console.log(maxNumber, '------maxNumber-----');