# Gioco pari e dispari

# Richiesta
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.


## Soluzione
- l'utente inserisce se la cifra è pari o dispari
    - inserimento tramite prompt
- l'utente inserisce un numero da 1 a 5 
    - inserimento tramite prompt
    - verifica tramite validazione dei dati inseriti 
- far generare un numero casuale (tra 1 e 5) al computer 
    - usare funzione co math.random
- sommare i 2 numeri
    - somma userNumber + cpuNumber
- verificare che la somma sia pari o dispari 
    - usare funzione con modulo 
- stampare il risultato e l'automatico vincitore