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

const NomePasseggero = document.getElementById("NomePasseggero").value
console.log( "il tuo nome: " , NomePasseggero);

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


const NomeECognome=document.getElementById("nomeecognome").innerHTML="nome e cognome";
const offerta=document.getElementById("offerta").innerHTML="offerta";
const BigliettoStandard=document.getElementById("bigliettostandard").innerHTML="Biglietto standard"
const carrozzaText=document.getElementById("carrozza").innerHTML="carrozza";
const mostraCodice=document.getElementById("mostracodice").innerHTML="codice"
const MostraCosto=document.getElementById("mostracosto").innerHTML="costo del biglietto"

 const carrozza= document.getElementById("mostracarrozza").innerHTML=Math.floor(Math.random() * 9) + 1;
 const codiceTreno= document.getElementById("codice").innerHTML=Math.floor(Math.random() * 10000) + 90001;
 document.getElementById("mostranome").innerHTML = NomePasseggero
 document.getElementById("costobiglietto").innerHTML = PrezzoKm.toFixed(2) + "euro"
 const sfondo=document.getElementById("sfondo")
 console.log(sfondo)
 sfondo.style.border="2px solid black";
 sfondo.style.backgroundColor="#D0D0D0";

 }
 )
// funzione al clik annulla//
 const Annulla=document.getElementById("annulla")
 Annulla.addEventListener("click",function(){
 const form =document.getElementById("form");
 console.log(form)
 form.classList.add("remove");
   
 })









 

 
