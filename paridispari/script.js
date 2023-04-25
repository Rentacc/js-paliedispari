const divisibility = prompt('pari o dispari');
const userNum = parseInt(prompt('inserisci un numero da 1 a 5'))
const computerNum = getRandomInteger(1,5);
const sum = userNum + computerNum;

console.log(computerNum)


if(divisibility == evenOdd(sum)){
    console.log('hai vinto')
} else{
    console.log('hai perso')
}


















function getRandomInteger(min, max) {
    const random = Math.floor(Math.random() * (max - min + 1) ) + min;
    return random;
}

function evenOdd(number) {
    if(number % 2 == 0) {
        return 'pari';
    }
    return 'dispari';
}