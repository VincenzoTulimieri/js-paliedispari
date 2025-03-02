console.log('ciao vincenzo')



let adjectiveNumber = prompt('Inserisci se secondo te il numero è pari o e dispari');
let userNumber = parseInt(prompt('Inserisci il tuo numero'));


const isNumberValid = !isNaN(userNumber) && userNumber >= 1 && userNumber <= 5;
let isAdjectiveValid = isNaN(adjectiveNumber) && validAdjective();


function validAdjective() {
    const adjective = ['pari', 'dispari']

    if (adjectiveNumber = adjective[0]) {

    } else if (adjectiveNumber = adjective[1]) {

    }
    return true
}
function cpuNumber() {
    let number = Math.floor(Math.random() * 5) + 1;
    return number
}



if (isNumberValid && isAdjectiveValid) {

    console.log(adjectiveNumber)
    console.log(userNumber)

    cpuNumber();
    console.log(cpuNumber())

    // somma dei numeri
    let sumNumber = userNumber + cpuNumber()
    console.log(sumNumber)


    function adjectiveSum() {
        let qualitaNumero = sumNumber
        if (qualitaNumero % 2 === 0) {

        } else if (qualitaNumero % 2 !== 0) {

        }
        return qualitaNumero
    }


    
    adjectiveSum()
    


} else {
    console.log('i valori inseriti non sono validi')
}


// let result = adjectiveSum()
// console.log(adjectiveSum())


// if(adjectiveNumber === result){
//     console.log('hai vinto')
// }else if(adjectiveNumber !== result){
//     console.log('hai perso')
// }