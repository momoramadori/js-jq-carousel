//intercetto il click sulla freccia "avanti" e sul suo box
$('.next').click(nextF);

//intercetto il click sulla freccia "indietro" e sul suo box
$('.prev').click(prevF);

//intercetto il click sui pallini
$('.bullets-on i').click(function() {
    //recupero la posizione del pallino attualmente cliccato
    var currentIndex = $(this).index();
    //collego l'immagine corrente legandomi alla posizione del pallino cliccato
    var currentElement = $('img').eq(currentIndex);
    //sottraggo la visibilità all'immagine che la aveva
    $('img.active').removeClass('active');
    //aggiungo la visibilità all'imagine corrispondente al pallino cliccato
    currentElement.addClass('active');
    //sottraggo la visibilità al pallino cliccato
    $('i.actived').removeClass('actived');
    //attribuisco la visibilità al pallino su cui mi sto spostando
    $(this).addClass('actived');
});


//Per riuscire a rendere automatico lo scorrere delle slide a 3 secondi ed avviarlo/stopparlo con un click sui pulsanti play e pause riutilizzo la funzione precedentemente utilizzata per il next.

//creo una variabile fuori dalla funzione così da renderla globale
var clock;
//intercetto il click su play e gli applico il setInterval per far scorrere le immagini
$('.play').click(function() {
    clock = setInterval(nextF, 3000);
});
//Intercetto il click su pause per interrompere il loop del setInterval tramite la funzione designata
$('.pause').click(function() {
    clearInterval(clock);
});


//funzione generalizzata next
function nextF() {
    //recupero l'immagine corrente
    var currentImg = $('img.active');
    //recupero il pallino corrente
    var currentBull = $('i.actived');
    //tolgo la visibilità all'immagine corrente
    currentImg.removeClass('active');
    //tolgo la visibilità al pallino corrente
    currentBull.removeClass('actived');
    //recupero l'immagine successiva
    var nextImg = currentImg.next('img');
    //recupero l'immagine successiva
    var nextBull = currentBull.next();
    // se l'immagine successiva ha lunghezza  diversa da 0 => c'è, gli passo la visibilità
    if (nextImg.length != 0) {
        nextImg.addClass('active');
        nextBull.addClass('actived');
    } else {
        // se l'immagine successiva ha lunghezza 0 => non c'è => do la visibilità alla prima immagine e pallino e ricomincio il giro
        $('img:first-child').addClass('active');
        $('.fas:first-child').addClass('actived');
    }
};

//funzione generalizzata prev
function prevF () {
    //recupero l'immagine corrente
    var currentImg = $('img.active');
    //recupero il pallino corrente
    var currentBull = $('i.actived');
    //tolgo la visibilità all'immagine corrente
    currentImg.removeClass('active');
    //tolgo la visibilità al pallino corrente
    currentBull.removeClass('actived');
    //recupero l'immagine precedente
    var prevImg = currentImg.prev('img');
    //recupero il pallino precedente
    var prevBull = currentBull.prev();
    // se l'immagine precedente ha lunghezza =! 0, ovvero c'è attribuisco ad essa e al pallino visibilità
    if (prevImg.length != 0) {
        prevImg.addClass('active');
        prevBull.addClass('actived');
    } else {
        //se non c'è ovvero l'immagine precedente ha length = 0, attribuisco visibilità all'ultima immagine e pallino
        $('img:last-child').addClass('active');
        $('.fas:last-child').addClass('actived');
    }
}
