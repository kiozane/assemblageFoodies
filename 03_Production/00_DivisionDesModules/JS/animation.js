$(function(){
    /* [isMobile] */
    if ($('nav').hasClass('isMobile')){
        $('.fas').on('focus', function(){
             
            switchMenu();
        }); 
        $('.fas').on('blur', function(){
            switchMenu();
        }); 
    }
});



function switchMenu(){
    $('nav').toggleClass('menuFerme');
    $('nav').toggleClass('menuOuvert');
}