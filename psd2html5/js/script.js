$(document).ready(function () {
  new WOW().init();

  $('.burger-nav').on('click', function () {
    $('.container nav ul').toggleClass('open');
  });

  $('.js-wp-2').waypoint(
    function (direction) {
      $('.js-wp-2').addClass('animated slideInUp');
    },
    {
      offset: '70%',
    }
  );

  $('.iphone-btn').delay(2300).animate({ bottom: '+=-3px' }, 300);
  $('.iphone-btn').delay(100).animate({ top: '+=-3px' }, 100);

  $('.js-wp-3').waypoint(function (direction) {
    $('.js-wp-3').addClass('animated fadeIn');
  });
});
