$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $('body').addClass('change-color')
      }
      if ($(this).scrollTop() < 50) {
         $('body').removeClass('change-color')
      }
   });
});