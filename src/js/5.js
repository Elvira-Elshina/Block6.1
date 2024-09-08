
window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);
    };

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };
  
    breakpoint.addEventListener('resize', checker);
    checker();
  };

  resizableSwiper(
    '(max-width: 767px)',
    '.swiper',
    {
      loop: false,
      spaceBetween: 16,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dinamicBullets: true,
      },
    }
  );
});
 
const openButton = document.querySelector('.button__show-all');
const visible = document.querySelector('.all-card');

openButton.addEventListener('click', function() {
  visible.classList.toggle('visible');
  openButton.classList.toggle('hide');

  if (openButton.classList.contains('hide')) {
    openButton.textContent = 'Скрыть';
  } else {
    openButton.textContent = 'Показать все';
  }
});


const openButton2 = document.getElementById('button__show-all-2');
const visible2 = document.querySelector('.repair-cards');

openButton2.addEventListener('click', function() {
  visible2.classList.toggle('visible');
  openButton2.classList.toggle('hide');

  if (openButton2.classList.contains('hide')) {
    openButton2.textContent = 'Скрыть';
  } else {
    openButton2.textContent = 'Показать все';
  }
});
