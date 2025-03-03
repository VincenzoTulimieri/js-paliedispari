
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
        

        // somma dei numeri
        let sumNumber = userNumber + cpuNumber
        
        // verifica se il numero è pari o dispari 
        let result = adjectiveSum(sumNumber)
        
        //stampa del risultato
        if(adjectiveNumber === result){
            console.log(`Complimenti il numero che è uscito è ${sumNumber}, Hai vinto`)
        }else{
            console.log(`Mi dispiace il numero che è uscito è ${sumNumber}, Hai perso`)
        } 

    } else{
        console.log('Il numero inserito non è corretto, Riprova')
    }


} else {
    console.log('I valori inseriti non sono validi, Riprova')
}

// Fuction

function number() {
    return Math.floor(Math.random() * 5) + 1;
}

function adjectiveSum(sum) {
    if(sum % 2 === 0){
        return 'pari'
    }else if(sum % 2 !== 0){
        return 'dispari'
    }
}

