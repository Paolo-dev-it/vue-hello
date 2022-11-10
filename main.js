/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

var app = new Vue({
  el: '#root',
  data: {
    message: 'Ciao Boolean!',
    image: './assets/img/pexels-chevanon-photography-1108099.jpg',
    classeDinamica: 'dimension',
    classeDisplay: '',
    classeHide: 'hide'
  },
  methods: {
    saluta: function(){
        if (this.classeDisplay == 'view' ){
           return this.classeDisplay = 'd-none'; 
        } else {
            return this.classeDisplay = 'view';
        }
    }
  }
})