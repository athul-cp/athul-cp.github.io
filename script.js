$(document).ready(function()
{
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
    });
    $('.menu-icon').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-icon i').toggleClass("active");

    });
    
});