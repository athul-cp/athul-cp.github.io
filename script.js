$(document).ready(function()
{
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll>500){
            $('.scroll-up-button').addClass("show");
        }else{
            $('.scroll-up-button').removeClass("show");
        }
        
    });


    //slide up

    $('.scroll-up-button').click(function(){
        $('html').animate({scrollTop:0});
    });

    //toggle menu

    $('.menu-icon').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-icon i').toggleClass("active");

    });
    //typing animation

    var typed= new Typed(".typing",{
        strings: ["Developer","Designer","Freelancer","Photograper","Traveller"],
        typeSpeed:100,
        backSpeed:60,
        loop: true
    });
    var typed= new Typed(".typing2",{
        strings: ["Developer","Designer","Freelancer","Photograper","Traveller"],
        typeSpeed:100,
        backSpeed:60,
        loop: true
    });
    
    //owl script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            },
        }

    });
});
