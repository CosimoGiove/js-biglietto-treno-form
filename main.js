"use strect"

const bottone=document.getElementById("entrata")
 bottone.addEventListener("click", function(){

    let NumeroKm = document.getElementById("kmPercorsi").value
NumeroKm = parseInt(NumeroKm)
console.log("Numero di km:", NumeroKm)

//chiedere all'utente l'età del passegero e salvarlo in una variabile prompt//

let EtaPasseggero =document.getElementById("anni").value
EtaPasseggero=parseInt(EtaPasseggero);
console.log("età del passeggero:",EtaPasseggero)

//calcolare il prezzo del biglietto in base ai km percorsi dall'utente (prezzo al km 0.21 euro)//

let PrezzoKm= NumeroKm*0.21;

/*Condizioni*/

const sconto2= PrezzoKm*0.4;
const sconto =PrezzoKm*0.2;
//sconto del 20%//
if (EtaPasseggero < 18){
    PrezzoKm= PrezzoKm - sconto
    console.log("Prezzo scontato totale da pagare : ", PrezzoKm.toFixed(2),)
    

//sconto del 40%//
}else if (EtaPasseggero > 65){

    PrezzoKm= PrezzoKm - sconto2
    console.log("Prezzo scontato totale da pagare : ", PrezzoKm.toFixed(2),)
}
 else{
    console.log("Prezzo intero", PrezzoKm)
 }
 }
 )

 

 
