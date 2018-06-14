$( document ).ready(function(){
  $('.slideshow .dots-wrapper .dot').click(function(){
    const index = $(this).index();
    const viewportWidth = $(window).width();
    $('.slideshow .slideshow-wrapper').animate({scrollLeft:(index*viewportWidth)}, 600);
  });

});
