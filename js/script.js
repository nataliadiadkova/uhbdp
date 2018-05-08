$(document).ready(function(){
    $('.center').slick({
        dots: true,
        arrows: true,
    });
});

(function($){
    $(function() {
      $('.menu__icon').on('click', function() {
        $(this).closest('.menu').toggleClass('menu_state_open');
      });
    });
  })(jQuery);