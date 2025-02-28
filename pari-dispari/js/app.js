console.log('ciao vincenzo')



let adjectiveNumber = prompt('Inserisci se secondo te il numero è pari o e dispari');
let userNumber= parseInt(prompt('Inserisci il tuo numero'));

function cpuNumber(){
   let number = Math.floor(Math.random() * 5) +1;
    return number
}


cpuNumber();
console.log(cpuNumber())



// somma dei numeri
let sumNumber = userNumber + cpuNumber()
console.log(sumNumber)


function adjectiveSum(){
    let qualitaNumero = sumNumber
    if(qualitaNumero % 2 === 0){
        console.log('è pari hai vinto')
    }else if(qualitaNumero % 2 !== 0){
        console.log('è dispari hai vinto')
    }
    return qualitaNumero
}
adjectiveSum()

// let result = adjectiveSum()
// console.log(adjectiveSum())


// if(adjectiveNumber === result){
//     console.log('hai vinto')
// }else if(adjectiveNumber !== result){
//     console.log('hai perso')
// }