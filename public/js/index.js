$( document ).ready(function(){
  // handle slideshow movements onclick dots
  $('.slideshow-wrapper .dots-wrapper .dot').click(function(){
    const index = $(this).index();
    $('.slideshow-wrapper .slideshow-view').css('transform', `translateX(${index*-100}vw)`);
  });

});
