//  Stykey Header  
$(window).scroll(function () {
  var scrolling = $(this).scrollTop();

  if (scrolling > 200) {
    $('.navbar').addClass('sticky_header');
  }
  else {
    $('.navbar').removeClass('sticky_header');
  }
});
// ack-to-top button
$(window).on('scroll', function (event) {
  if ($(this).scrollTop() > 600) {
    $('.back-to-top').fadeIn(200)
  } else {
    $('.back-to-top').fadeOut(200)
  }
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: 0,
  }, 3000);
});

// Venobox 
new VenoBox({
  selector: '.my-video-links',
});


  $('.slick_slider').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1300,
    pauseOnHover: false,
    });
