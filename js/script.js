const sideMenuWrapper = document.querySelector('.mobile-menu-wrp');
const sideMenu = document.querySelector('.mobile-menu');
console.log(sideMenu);

window.addEventListener('click', () => {
  let target = event.target;
  if (target.className === 'menu-button') {

    sideMenuWrapper.style.display = 'block';
    sideMenuWrapper.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    setTimeout(function () {
      sideMenu.style.transform = 'translateX(260px)';
    }, 10);
  } else if (target.className === 'mobile-menu-wrp') {
    sideMenu.style.transform = 'translateX(0px)';
    sideMenuWrapper.style.backgroundColor = "rgba(0, 0, 0, 0)";
    setTimeout(function () {
      sideMenuWrapper.style.display = 'none';
    }, 500);
  }

});
$('.ability-slide-wrp').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [{
    breakpoint: 800,
    settings: {
      autoplay: false,
      arrows: false,
      adaptiveHeight: true,
    }
  }]
});
$('.main-slider-wrp').slick({
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  asNavFor: '.sub-slider-wrp',

});
$('.sub-slider-wrp').slick({
  infinite: true,
  speed: 1000,
  fade: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  asNavFor: '.main-slider-wrp',
  centerMode: true,
  focusOnSelect: true,
  prevArrow: '.btn-prev',
  nextArrow: '.btn-next',
  responsive: [{
    breakpoint: 450,
    settings: {
      slidesToShow: 2,
      centerMode: false
    }
  }]
});

// lightbox.option({
//   'resizeDuration': 200,
//   'wrapAround': true,
//   'disableScrolling': true,
// });