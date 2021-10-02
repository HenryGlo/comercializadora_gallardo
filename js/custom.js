// Swiper
var swiper = new Swiper('.swiper-bannr', {
  slidesPerView: 2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.swiper-testimonials', {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    600: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    999: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1300: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

//JustifiedGallery

var w = $(window).width();
var rowH = 250
if( w < 1000 ) {
  rowH = 100;
}

$("#mygallery").justifiedGallery({
  lastRow : 'nojustify',
  rowHeight: rowH,
  maxRowHeight: 1000,
  margins: 15,
  cssAnimation: true,
  randomize: true,
  border: 30
});


$(window).on("load",function(){
  $("#preloader").fadeOut("fast");
});
