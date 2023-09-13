$(function () {
  // *jquery code
  // *menu FIXED
  $(window).scroll(function () {
    let src = $(window).scrollTop();
    // console.log(src);

    if (src > 600) {
      $('nav').addClass('menuFixed');
    } else {
      $('nav').removeClass('menuFixed');
    }
    if (src > 1300) {
      $('.backToTopBtn').fadeIn();
    } else {
      $('.backToTopBtn').fadeOut();
    }
  });

  $('.backToTopBtn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 650);
  });
  $(window).scroll(function () {
    let down = $(window).scrollDown();
    console.log(down);
  });
});
