
// utente inseriesce la parola 
let userWord = prompt('Inserisci la parola')

// inverto la parola

function reverseWord(word) {
    let newWord = '';
 
    for (let i = word.length - 1; i >= 0; i--) { 
        newWord += word[i]; 
    }
    
    return newWord; 
}

 reverseWord(userWord)
 console.log(reverseWord(userWord))
 
 // verifico che la parola è palindroma e stampo il risultato
 
if(userWord === reverseWord(userWord)){
    console.log('la tua parola è palindroma');
} else {
    console.log('la tua parola non è palindroma');
}

 
