// RACCOLTA DATI
// prompt con conversione stringhe in numeri
const userKm = Number(prompt(`Inserisci i km che devi percorrere`, "150"));
const userAge = Number(prompt(`Inserisci la tua età`, "25"));

// dati numerici
const pricePerKilometre = 0.21;
const price = (userKm * pricePerKilometre);

console.log("userKm", userKm);
console.log("userAge", userAge);

let outputText;


// SVOLGIMENTO

// controllo valori inseriti
if (
    (userKm > 0 && 
    Number.isInteger(userKm) &&
    userAge > 0 &&
    Number.isInteger(userAge)
    // !isNaN(userKm) && 
    // !isNaN(userAge)
    )
) {
    // se i valori sono numerici (corretti) 

    // sconto per minorenni
    if (
        (userAge <= 17) &&
        price > 0 &&
        !isNaN(price)
    ) {
    const discountPerc20 = 20;
    const discountAmount20 = (price * discountPerc20) / 100;
    const finalPrice = parseFloat((price - discountAmount20).toFixed(2));
    // .toFixed: trasforma il numero in stringa e gli dà due decimali
    // parseFloat: ritrasforma la stringa in numero

    outputText = ("Il prezzo del tuo biglietto scontato è: " + finalPrice);

    console.log("Il prezzo del tuo biglietto scontato è: " + finalPrice);
    }

    // sconto per utenti over 65
    else if (
       (userAge >= 65) &&
       price > 0 &&
       !isNaN(price)
    )  {
      const discountPerc40 = 40;
      const discountAmount40 = (price * discountPerc40) / 100;
      const finalPrice = parseFloat((price - discountAmount40).toFixed(2));
      
      outputText = ("Il prezzo del tuo biglietto scontato è: " + finalPrice);

      console.log("Il prezzo del tuo biglietto scontato è: " + finalPrice);
    }

    else {
        outputText = ("Il prezzo del tuo biglietto è: " + price);

        console.log("Il prezzo del tuo biglietto è: " + price);
    }
} 
    
    // se i valori non sono numerici (non corretti) 
    else {
    outputText = "Invalid input. Inserisci dei numeri interi!"
    console.log("Invalid input. Inserisci dei numeri interi!");
}

// OUTPUT

alert(outputText)
