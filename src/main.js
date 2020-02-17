

jQuery(function($) {

  $(document).ready(function () {

    console.log('YEP1');

    var wWindow = $(window).width();

    // burger start

    $('.burger').on('click', function (e) {
      $('.header__menu').toggleClass('fixed');

      if (wWindow < 768) {
        $('.header__call').toggleClass('mobile');
      }

      $('.burger').toggleClass('burger-closed');
    });


    // burger end

  });

});


