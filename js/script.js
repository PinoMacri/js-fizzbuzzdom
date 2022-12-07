//! - TRACCIA -
/*Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
-per i multipli di 3 stampi “Fizz” al posto del numero
-per i multipli di 5 stampi “Buzz” al posto del numero.
-per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.*/

//~---------------------------------------------------------------------------------------

//! - STEP SVILUPPO -
//** 0 - CONTROLLARE STEP BY STEP AVVENUTO AGGANCIO TRAMITE CONSOLE
//** 1 - Apriamo il Ciclo
//** 2 - Assegniamo la Variabile da riutilizzare al cambiare dei multipli
//** 3 - Calcolare i multipli sia di 3 che di 5
//** 4 - Calcolare i multipli solo di 3
//** 5 - Calcolare i multipli solo di 5
//** 6 - Specificare tutti gli altri numeri
//** 7 - Controllo finale in console

//~---------------------------------------------------------------------------------------
//! - SVOLGIMENTO -
    const title = document.createElement ("div")
    title.innerText = "FizzBuzzDom"
    contenitore.appendChild (title)
    title.classList ="titolo"
//^ 1 - CICLO
for (let i = 1; i <= 100; i++)
{
    const contenitore = document.getElementById ("contenitore")
    const divResult = document.createElement("div")
    contenitore.append (divResult)
    //** 2 - ASSEGNAZIONE VARIABILE DA RIASSEGNARE*/
    let result;
    //* 3 - SE HO MULTIPLI DI 3 E DI 5*/
    if ((i % 3 == 0) && (i % 5 == 0)) {
    result = "FizzBuzz";
    divResult.innerText = result
    divResult.classList ="normalNumber styleFizzBuzz"
    //* 4 - SE ALTRIMENTI HO SOLO MULTIPLI DI 3*/
    } else if (i % 3 == 0) {
    result = "Fizz";
    divResult.innerText = result
    divResult.classList ="normalNumber styleFizz"
    //* 5 - SE ALTRIMENTI HO SOLO MULTIPLI DI 5*/
    } else if (i % 5 == 0) {
    result = "Buzz";
    divResult.innerText = result
    divResult.classList ="normalNumber styleBuzz"
    //* 6 - ALTRIMENTI TUTTI GLI ALTRI NUMERI*/
    } else {
    result = i;
    divResult.innerText = result
    divResult.classList ="normalNumber styleNormalNumber"
    }
    //! 7 - CONTROLLO E STAMPA FINALE
    console.log(result);
}





