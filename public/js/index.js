$( document ).ready(function(){
  // TODO: one bug where touch scroll would create offset that is not match when translateX
  // TODO: one bug where touch scroll will stop scrolling to the left
  // handle slideshow movements onclick dots
  $('.slideshow .dots-wrapper .dot').click(function(){
    const index = $(this).index();
    $('.slideshow .slideshow-wrapper .slideshow-view').css('transform', `translateX(${index*-100}vw)`);
  });

});
