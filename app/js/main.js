var swiper = new Swiper('.customers__swiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    481: {
      slidesPerView: 3,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    1200: {
      loop: false,
      slidesPerView: 5,
      spaceBetween: 109,
    },
  },
});

const acc = document.getElementsByClassName('accordion');

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}
