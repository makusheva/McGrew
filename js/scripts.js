$(document).ready(function(){
    $('.nav-links a').click(function(){
        $(' a').removeClass("active");
        $(this).addClass("active");
    });
    
$('.slider').slick({
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
});
});