$('.next').click(function(){
    var currentImg = $('img.active');
    var currentBull = $('i.actived');
    currentImg.removeClass('active');
    currentBull.removeClass('actived');
    var nextImg = currentImg.next('img');
    var nextBull = currentBull.next();
    if (nextImg.length != 0) {
        nextImg.addClass('active');
        nextBull.addClass('actived');
    } else {
        $('img:first-child').addClass('active');
        $('.fas:first-child').addClass('actived');
    }
})

$('.prev').click(function(){
    var currentImg = $('img.active');
    var currentBull = $('i.actived');
    currentImg.removeClass('active');
    currentBull.removeClass('actived');
    var prevImg = currentImg.prev('img');
    var prevBull = currentBull.prev();
    if (prevImg.length != 0) {
        prevImg.addClass('active');
        prevBull.addClass('actived');
    } else {
        $('img:last-child').addClass('active');
        $('.fas:last-child').addClass('actived');
    }
});

//Quando clicco su un pallino voglio che quello si colori e che mi appaia l'immagine corrispondente.

//DA FINIRE



// //Intercetto il click sul pallin0
// $('i').click(function(){
// //Identifico il pallino attivo
// var clickedBull = $('i.actived');
// //rimuovo lo stato di cliccato da quello
// clickedBull.removeClass('actived');
// //faccio diventare pieno il pallino in posizione 1
// var toClickBull = $('.fa-circle').eq(n).addClass('actived');
// //Ottengo la posizione del pallino cliccato
// var index = $('i.actived').index();
// index = n;
// console.log(index);
// })

//seleziono il div che che ha length 4, se clicclo l'elemento in posizione 1 diventa bianco esso stesso e così via per gli altri

// $('.bullets-off i').click(function(){
//     var currentBull = $('li').index();
//     console.log(currentBull);
// })
