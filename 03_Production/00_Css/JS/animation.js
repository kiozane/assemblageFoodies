function switchMenu(){
    $('nav').toggleClass('menuFerme');
    $('nav').toggleClass('menuOuvert');
}

$(function(){
    /* [isMobile] */
    if ($('nav').hasClass('isMobile')){

        document.querySelector('.menuMobile').addEventListener("click", function(){
            switchMenu();
        });
        document.querySelector('.menuBurger').addEventListener("click", function(){
            switchMenu();
        });


        // $('.fas').on('focus', function(){
             
        //     switchMenu();
        // }); 
        // $('.fas').on('blur', function(){
        //     switchMenu();
        // }); 
    }
});





