

jQuery(function($) {

  $(document).ready(function () {

    console.log('YEP1');

    var wWindow = $(window).width();

    if (wWindow < 1200){
      $('.header__menu').addClass('fixed');
    }

    // header opacity start

    $(window).on("scroll", function () {

      scroll = $(this).scrollTop();

      if (wWindow >= 1200){
        if ($(this).scrollTop() > 30) {
          $('.header').css("background-color", 'rgba(42, 49, 128, 1)')
        } else {
          $('.header').css("background-color", 'rgba(42, 49, 128, 0.6)')
        }
      }
    });

    // header opacity end

    // burger start

    $('.burger').on('click', function (e) {
      $('.header__menu').toggleClass('active');

      if (wWindow < 768) {
        $('.header__call').toggleClass('mobile');
      }

      $('.burger').toggleClass('burger-closed');
    });

    // burger end

    // advantages item desc and img click start

    $('.advantages-item__title, .advantages-item img').on('click', function (e) {
      event.preventDefault(e);

      var advDesc = $(this).closest('.advantages-item').find('.advantages-item__desc');
      var advLineLeft = $(this).closest('.advantages-item').find('.advantages-item__line-left');
      var advLineRight = $(this).closest('.advantages-item').find('.advantages-item__line-right');

      if (advDesc.hasClass('active')){
        advDesc.toggleClass('active');
      }

      else{

        $('.advantages-item__desc').removeClass('active');
        advDesc.toggleClass('active');
      }

      if (advLineLeft.hasClass('more-width')){
        advLineLeft.toggleClass('more-width')
      }

      else{

        $('.advantages-item__line-left').removeClass('more-width');
        advLineLeft.toggleClass('more-width');
      }

      if (advLineRight.hasClass('more-width')){
        advLineRight.toggleClass('more-width')
      }

      else{

        $('.advantages-item__line-right').removeClass('more-width');
        advLineRight.toggleClass('more-width');
      }
    });

    /*$('.advantages-item__title, .advantages-item img').on('mouseout', function (e) {
      $('.advantages-item__desc').removeClass('active');
      $('.advantages-item__line-left').removeClass('more-width');
      $('.advantages-item__line-right').removeClass('more-width');
    });*/

    $(window).on("scroll", function () {

      $('.advantages-item__desc').removeClass('active');
      $('.advantages-item__line-left').removeClass('more-width');
      $('.advantages-item__line-right').removeClass('more-width');
    });

    // advantages item desc and img click end

    /*form-call start*/

    $('.header-btn,.def-btn.call').on('click', function (e) {
      event.preventDefault(e);
      $('.form-call').fadeIn();
    });

    $('.def-form-back, .def-form__close').on('click', function () {
      $('.form-call, .form-thanks').fadeOut();
    });

    /*form-call end*/

    // POPUP FORM ON

    $('form').on('submit', function (e) {
      e.preventDefault();
      var data = new FormData();
      data.append('action', 'form_action');
      var dataSend = this.querySelectorAll('[data-send]');

      for (var i = 0; i < dataSend.length; i++) {
        var text, checked;
        data.append(dataSend[i].getAttribute('data-send'), dataSend[i].value);
        console.log(dataSend[i].value);
        dataSend[i].value = '';

      }

      $.ajax({
        url: ajax_params.ajax_url,
        type: 'POST',
        data: data,
        processData: false,
        contentType: false,
        success: function (res) {
          $('.form-call').fadeOut();
          $('.form-thanks').fadeIn();
          //alert('Спасибо за Вашу заявку.');
        }
      });

    });

    // POPUP FORM OFF

    $('.repairs-slider').slick({
      dots: true,
      arrows: true
    });

    $('.catalog-slider').slick({
      dots: true,
      arrows: true,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });

  });

});


