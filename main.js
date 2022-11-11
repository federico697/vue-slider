/* 
realizzare uno slider
Inserire 2 frecce a sinistra e a destra dell'immagine momentanea dello slider 
che permettono di andare avanti e indietro tra le immagini
BONUS:
nello slider ci sono dei pallini in basso al click dei pallini cambia l'immagine nello slider
a ogni 3 sec l'immagine cambia automaticamente senza nessun click da parte nostra
*/

var root = new Vue({
    
    el:'#root',
    data: {
        album: ["./img/img1.jpg", "./img/img2.jpg"],
        indice: 0,
    },
    methods: {
        cambiaOggettoRight: function(){
            this.indice++;
            if( this.indice > this.album.length - 1){
                return this.indice = 0
            }
        },
        cambiaOggettoLeft: function(){
            this.indice++;
            if( this.indice > this.album.length - 1){
                return this.indice = 0
            }
        }
    }
});
