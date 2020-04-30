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

//Quando clicco sul bullet n rendo active l'immagine corrispondente in ordine nel div
$('bullets-off i').click(function(){
    var clickedBull = $('i.actived');
    clickedBull.removeClass('actived');
    var toClickBull = $('bullets-on i').addClass('actived');
    console.log(toClickBull);
})
