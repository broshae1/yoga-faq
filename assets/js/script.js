console.log("hello world");

if(jQuery) {
    console.log("jquery loaded");
}

else {
    console.log("no jquery");
}

$('.faq-question').click( function() {

    //get this faq question's child that is a paragraph and toggle its visibility with animation
    $(this).children('p').slideToggle(500);
    $(this).children('button').toggleClass('closed open');
});

$('#menu-button').click( function(){
    $('#overlay-menu-container').fadeIn();
})

$('#close-menu').click( function(){
    $('#overlay-menu-container').fadeOut();
})