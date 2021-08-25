 $(document).ready(function () {

/*-------------------------------------------------------------------------------
        smooth scroll jQ start 
-------------------------------------------------------------------------------*/
    $('.mobile-menu .overlay-content a').smoothScroll({
        offset: 0
    });

    $('.footer_logo a').smoothScroll({
            offset: 0
        });
/*-------------------------------------------------------------------------------
        smooth scroll jQ end 
-------------------------------------------------------------------------------*/
 $('.nav-icon, .close-div, .overlay-content a').click(function(){
    $('.close-div').toggle();
 })

//scroll animation start
     $(".scroll_top .scroll").click(function () {
         $("html, body").animate({
             "scrollTop": 0
         }, 500);
     });

     $(window).scroll(function () {
         if ($(window).scrollTop() > 400) {
             $(".scroll").fadeIn(500);
         } else($(".scroll").fadeOut(500))
     });



// magnific-pop up
    $('.popup').magnificPopup({
      type: 'image',
      // other options
      gallery:{
        enabled:true
      }
    });

/*------------------------------------------------------------------------------- 
        sticky menu
 -------------------------------------------------------------------------------*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 130) {
            $(".sticky-header").removeClass("sticky");
        } else {
            $(".sticky-header").addClass("sticky");
        }
    });

 })
