// Il programma dovrà chiedere all’utente il
// numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà
// calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai
// km (0.21 € al km), ma va applicato uno
// sconto del 20% per i minorenni e del
// 40% per gli over 65.

var generatorButton = document.getElementById("generator_btn");
generatorButton.addEventListener("click",
     function() {

          // chiedere all'utente il proprio nome
          var name = document.getElementById("name").value;

          // chiedere all'utente il numero di km da percorrere
          var distance = document.getElementById("km").value;

          // chiedere all'utente l'età
          var age = document.getElementById("age").value;

          // prezzo biglietto
          var ticketPrice = 0.21 * distance;

          // sconto del 20%
          var discount20 = ((20 * ticketPrice) / 100);

          // sconto del 40%
          var discount40 = ((40 * ticketPrice) / 100);


          document.getElementById("discount").style.color = "black";
          var ticketType = "Biglietto standard"
          if (age == "minor") {
               ticketPrice = ticketPrice - discount20;
               ticketType = "Sconto silver";
               document.getElementById("discount").style.color = "silver";
          } else if (age == "old") {
               ticketPrice = ticketPrice - discount40;
               ticketType = "Sconto Gold";
               document.getElementById("discount").style.color = "gold";
          }


          document.getElementById("customer_name").innerHTML = name;
          document.getElementById("discount").innerHTML = ticketType;

          document.getElementById("price").innerHTML = ticketPrice.toFixed(2) + "€";

          // creazioni variabili vagone e codice cp
          var wagon = Math.floor((Math.random() * 9) + 1);
          document.getElementById("wagon").innerHTML = "n°: " + wagon;

          var cpCode = Math.floor((Math.random() * 10000) + 90000);
          document.getElementById("cp_code").innerHTML = "n°: " + cpCode;

          // il biglietto appare solamente al click del pulsante genera
          var ticketPrinted = document.getElementById("ticket_printed");
          ticketPrinted.className = "show";
     }
);

var cancelButton = document.getElementById("cancel_btn");
cancelButton.addEventListener("click",
     function() {

          // il biglietto viene nascosto al click sul pulsante annulla
          var ticketPrinted = document.getElementById("ticket_printed");
          ticketPrinted.className = "hidden";

          // i valori inseriti nei campi del form vengono eliminati
          document.getElementById("name").value = "";
          document.getElementById("km").value = "";
          document.getElementById("age").value = "not_work";

          // i valori inseriti nei campi del biglietto vengono eliminati
          document.getElementById("customer_name").innerHTML = "";
          document.getElementById("discount").innerHTML = "";
          document.getElementById("wagon").innerHTML = "";
          document.getElementById("cp_code").innerHTML = "";
          document.getElementById("price").innerHTML = "";

     }
)
