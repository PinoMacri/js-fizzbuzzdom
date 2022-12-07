//! - TRACCIA -
/*Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
-per i multipli di 3 stampi “Fizz” al posto del numero
-per i multipli di 5 stampi “Buzz” al posto del numero.
-per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.*/

//! - STEP SVILUPPO -
//** 0 - CONTROLLARE STEP BY STEP AVVENUTO AGGANCIO TRAMITE CONSOLE
//** 1 - Apriamo il Ciclo
//** 2 - Assegniamo la Variabile da riutilizzare al cambiare dei multipli
//** 3 - Calcolare i multipli sia di 3 che di 5
//** 4 - Calcolare i multipli solo di 3
//** 5 - Calcolare i multipli solo di 5
//** 6 - Specificare tutti gli altri numeri
//** 7 - Controllo finale in console

 //^ 1 - CICLO
for (let i = 1; i <= 100; i++)
{
    //** 2 - ASSEGNAZIONE VARIABILE DA RIASSEGNARE*/
    let result;
    //* 3 - SE HO MULTIPLI DI 3 E DI 5*/
    if ((i % 3 == 0) && (i % 5 == 0)) {
        result = "FizzBuzz";
    //* 4 - SE ALTRIMENTI HO SOLO MULTIPLI DI 3*/
    } else if (i % 3 == 0) {
        result = "Fizz";
    //* 5 - SE ALTRIMENTI HO SOLO MULTIPLI DI 5*/
    } else if (i % 5 == 0) {
        result = "Buzz";
    //* 6 - ALTRIMENTI TUTTI GLI ALTRI NUMERI*/
    } else {
        result = i;
    }
    //! 7 - CONTROLLO FINALE IN CONSOLE
    console.log(result);
}