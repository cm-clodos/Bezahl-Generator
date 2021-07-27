"use strict";

let x = 0;
const namensListe = Array();

const einwerfen = document.querySelector("#subbtn");

einwerfen.addEventListener("click", nameHinzufuegen);

const bezahlen = document.querySelector("#werzahlt");

bezahlen.addEventListener("click", werBezahlt);

const liste = document.querySelector(".nameanzeige");

const bezahler = document.querySelector(".namegezogen");



function nameHinzufuegen() {
   //leeres Array wird mit index nummer x + x++ mit jedem durchgang gefüllt
   namensListe[x] = document.querySelector("#name").value;
   x++;
   document.querySelector("#name").value = "";
   namenAnzeigen();
}

function namenAnzeigen() {
   let i = 0;
   let text = "";

   //mit for loop durch array iterieren
   for (i = 0; i < namensListe.length; i++) {
      text+= " Im Topf " + i + " = " + namensListe[i] + "<br/>";
   }
   liste.innerHTML = text;
}

function werBezahlt() {
   // anzahl personen = maximale index nr. des Arrays
   let anzahlPersonen = namensListe.length;

   let zahl = Math.floor(Math.random() * anzahlPersonen);

   let namegezogen = namensListe[zahl];

   bezahler.innerHTML = namegezogen;
}
