/* 
realizzare uno slider
Inserire 2 frecce a sinistra e a destra dell'immagine momentanea dello slider 
che permettono di andare avanti e indietro tra le immagini
BONUS:
nello slider ci sono dei pallini in basso al click dei pallini cambia l'immagine nello slider
a ogni 3 sec l'immagine cambia automaticamente senza nessun click da parte nostra
*/

var app = new Vue({
    el: '#app',
    data: {
        indice: 0,
        obj: [
            {
                url: './img/01.png',
                alt: 'descrizione immagine 1'
            },
            {
                url: './img/02.png',
                alt: 'descrizione immagine 2'
            },
            {
                url: './img/03.png',
                alt: 'descrizione immagine 3'
            },
            {
                url: './img/04.png',
                alt: 'descrizione immagine 4'
            },
            {
                url: './img/05.png',
                alt: 'descrizione immagine 5'
            },
        ],
    },
    mounted() {
        // entra quando l'applicativo vue ha caricato el: #app
        this.attivaIntervallo()
    },
    methods: {
        immagineSuccessiva(){
            // cambio immagine in avanti
            // controllo che l'indice sia minore della lunghezza dell'oggetto
            if( this.indice < this.obj.length - 1 ){
                this.indice++;
            } else{
                this.indice = 0;
            }
        },
        immaginePrecedente(){
            // se l'indice è minore di 0 torna all'ultimno elemento
            if( this.indice <= 0 ){
                this.indice = this.obj.length -1;
            } else{
                this.indice--;
            }
        },
        attivaIntervallo(){
            setInterval( ()=> { this.immagineSuccessiva() }, 3000 );
        },
        selezioneImmagine(index){
            this.indice = index;
        }
    }
})