

// l'utente sceglie pari o dispari
const adjectiveNumber = prompt('Inserisci se secondo te il numero è pari o e dispari');
const isAdjectiveValid = adjectiveNumber === 'pari' || adjectiveNumber === 'dispari';
console.log(adjectiveNumber)


if (isAdjectiveValid) {

    // l'utente sceglie un numero compreso tra 1 e 5
    const userNumber = parseInt(prompt('Inserisci il tuo numero compreso tra 1 e 5'));
    const isNumberValid = !isNaN(userNumber) && userNumber >= 1 && userNumber <= 5;
    console.log(userNumber)

    if (isNumberValid) {

        // generazione numero cpu
        let cpuNumber = number()
        console.log(cpuNumber)

        // somma dei numeri
        let sumNumber = userNumber + cpuNumber
        console.log(sumNumber)

        let result = adjectiveSum(sumNumber)
        console.log(result)

        if(adjectiveNumber === result){
            console.log('hai vinto')
        }else if(adjectiveNumber !== result){
            console.log('hai perso')
        } 

    } else{
        console.log('il numero inserito non è corretto')
    }


} else {
    console.log('i valori inseriti non sono validi')
}

function number() {
    return Math.floor(Math.random() * 5) + 1;
}

function adjectiveSum(sum) {
    return sum % 2 === 0
}

