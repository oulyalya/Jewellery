// 'use strict';
if (document.querySelector('.slider__wrapper')) {
  var slider = document.querySelector('.slider');
  var sliderFrame = slider.querySelector('.slider__wrapper');
  var sliderContent = slider.querySelector('.slider__slides');
  var sliderCard = slider.querySelector('.slider__card');
  var gap = 30;


  var sliderCards = slider.querySelectorAll('.slider__card');


  var leftBtn = slider.querySelector('.slider__btn--previous');
  var rightBtn = slider.querySelector('.slider__btn--next');

  // var width = sliderFrame.offsetWidth;


  var defineDevice = function () {
    var width = document.querySelector('.container').offsetWidth;
    var device = '';

    switch (true) {
      case width >= 1023:
        device = 'desktop'
        break;
      case width >= 768 && width <= 1022:
        device = 'tablet'
        break;
      case width >= 320 && width <= 767:
        device = 'mobile'
        break;
    }

    // document.querySelector('.check').onclick = () => {
    // console.log(width)
    // console.log(device)
    // }
    return device;
  }

  var defineMaxProducts = function () {
    var device = defineDevice();
    var maxProducts;

    switch (true) {
      case device === 'desktop':
        maxProducts = 4;
        break;
      case device === 'tablet':
        maxProducts = 2;
        break;
      case device === 'mobile':
        maxProducts = 2;
        break;
    }
    // console.log(maxProducts)
    return maxProducts;
  }

  var showNextSlide = function () {
    var cardsPerSlide = defineMaxProducts();
    var cardWidth = sliderCard.offsetWidth;

    var sliderContentWidth = sliderCards.length * cardWidth + ((cardsPerSlide - 1) * gap);

    // допускает значение с половиной
    var slidesQuantity = sliderCards.length / cardsPerSlide;
    // количество полных слайдов (то есть тех, где карточек 2 из 2х или 4 из 4х)
    var fullSlidesQuantity = Math.floor(slidesQuantity);

    // var currentSlide = position / slideWidth;
    // currentSlide = Math.abs(currentSlide)
    // (если текущий слайд == фул слайдз квонтити, то на след клике шивт равен нескольким карточкам, а  не целому слайду)

    // if (sliderCards.length % cardsPerSlide == 0) {
    // slidesQuantity = sliderCards.length % cardsPerSlide;
    // console.log(slidesQuantity + ' slidesQuantity')
    // console.log(currentSlide + ' currentSlide')
    // }


    // var frameWidth = sliderFrame.offsetWidth;

    var slideWidth = (cardsPerSlide * cardWidth) + (cardsPerSlide * gap);

    var shift = slideWidth;
    var maxLeft = slidesQuantity * slideWidth;

    // // проверка четко ли по количесвтву карточек
    // if (sliderCards.length % cardsPerSlide === 0) {
    //   console.log('четко')
    //   shift = slideWidth;
    //   // шифт = slideWidth
    //   // сдвигаем на целый слайд
    // } else {
    //   // if (position == (sliderContentWidth - strayCards * cardWidth + strayCards * gap)) {
    //   console.log('остаток')
    //   var strayCards = sliderCards.length - (cardsPerSlide * Math.floor(slidesQuantity));
    //   shift = strayCards * cardWidth + strayCards * gap;
    //   // если остаток ширины контента меньше ширины слайда,
    //   // сдвигаем на остаток карточек
    //   // }
    // }


    // var position = sliderContent.offsetLeft;

    // if ((slideWidth * slidesQuantity + sliderCards.length * gap) == sliderContentWidth) {
    //   console.log(1111)
    // }

    // console.log((slideWidth * slidesQuantity + (sliderCards.length - 1) * gap))
    var position = sliderContent.offsetLeft;
    position = Math.abs(position);
    // console.log(currentSlide + ' currentSlide')


    // right
    if (position < maxLeft - slideWidth) {
      console.log(1)
      sliderContent.style.left = `-${position += shift}px`;
      // console.log(sliderContent)
      console.log(position + 'pos')
      console.log(shift + 'wdt')
    }
    else {
      console.log(11)
      sliderContent.style.left = 0;

    }








    // var currentSlide = (position + slideWidth) / (sliderFrame.offsetWidth + gap);
    // // currentSlide = Math.abs(currentSlide)
    // // (если текущий слайд == фул слайдз квонтити, то на след клике шивт равен нескольким карточкам, а  не целому слайду)

    // // if (sliderCards.length % cardsPerSlide == 0) {
    // // slidesQuantity = sliderCards.length % cardsPerSlide;
    // // console.log(slidesQuantity + ' slidesQuantity')
    // console.log(currentSlide + ' currentSlide')
    // console.log(`${sliderContent.offsetWidth} / ${position}`)
    // console.log(typeof position)
    // // }

    // sliderContent.style.transform = `translateX(-${shift}px)`;
    // sliderContent.style.left = sliderContent.offsetLeft += shift
    // sliderContent.style.left = `-${position += shift}px`;

    // `-${sliderContent.offsetLeft + shift}px`;
    // sliderContent.style.left = `-${shift}px`;
    // console.log(position)

    // sliderFrame.style.border = "14px solid purple"
    // sliderContent.style.background = "red"
    // return amount;
  }


  var showPreviousSlide = function () {
    var cardsPerSlide = defineMaxProducts();
    var cardWidth = sliderCard.offsetWidth;

    // var sliderContentWidth = sliderCards.length * cardWidth + ((cardsPerSlide - 1) * gap);

    // допускает значение с половиной
    var slidesQuantity = sliderCards.length / cardsPerSlide;
    // количество полных слайдов (то есть тех, где карточек 2 из 2х или 4 из 4х)
    var fullSlidesQuantity = Math.floor(slidesQuantity);


    // var frameWidth = sliderFrame.offsetWidth;

    var slideWidth = (cardsPerSlide * cardWidth) + (cardsPerSlide * gap);

    var shift = slideWidth;
    var maxLeft = cardWidth * (sliderCards.length - cardsPerSlide) + gap * (sliderCards.length - cardsPerSlide);

    var position = sliderContent.offsetLeft;
    position = Math.abs(position);

    if (position == 0) {
      sliderContent.style.left = `-${maxLeft}px`;
    }
    else {
      sliderContent.style.left = `-${position -= shift}px`;
    }
  }


  var windowChangeHandler = function () {
    var device = defineDevice();

    var cardsPerSlide = defineMaxProducts();
    var cardWidth = sliderCard.offsetWidth;
    var slidesQuantity = sliderCards.length / cardsPerSlide;
    var slideWidth = (cardsPerSlide * cardWidth) + (cardsPerSlide * gap);
    var position = sliderContent.offsetLeft;
    position = Math.abs(position);
    console.log(position);
    // console.log(slideWidth);
    // console.log(slidesQuantity);


    var check;
    var shift;
    // if (device == 'desktop') {
    // check = position - ((cardWidth + gap) * cardsPerSlide);
    if (device == 'mobile' && position % ((cardWidth + gap) * 2) == 0
      || device == 'tablet' && position % ((cardWidth + gap) * 2) == 0
      || device == 'desktop' && position % ((cardWidth + gap) * 4) == 0) {
      // shift = 0;
      // }
    } else {

      // var fullSlides = position / ((cardWidth + gap) * cardsPerSlide);
      shift = position - fullSlides;
      // var difference = position - fullSlides;
      // position += difference;
      console.log(fullSlides, 222222222222222222)

    }
    // // sliderContent.style.left = `${check}px`;
    console.log(`${(sliderContent.offsetWidth - position) - (cardWidth + gap) * cardsPerSlide} (cardWidth + gap) * cardsPerSlide gjp`)
    // sliderContent.style.left = `-${shift}px`;
    console.log(shift)


    // position - целые слайды , остается куксочек, на жтот кусочек - смешение
  }

  window.addEventListener('resize', windowChangeHandler)
  document.querySelector('.check').onclick = defineMaxProducts;
  leftBtn.onclick = showPreviousSlide;
  rightBtn.onclick = showNextSlide;
}
  // var slides;
  // var count = slides.length

// (function () {
//   // slider
//   var slider = document.querySelector('.slider');
//   var sliderContent = document.querySelector('.slider__list');
//   var scrollLeftBtn = document.querySelector('.slider__control--previous');
//   var scrollRightBtn = document.querySelector('.slider__control--next');

//   scrollLeftBtn.onclick = function () {
//     slider.style.background = "red";
//     console.log('works')
//   }

//   scrollRightBtn.onclick = function () {
//     sliderContent.style.background = "yellow";
//     console.log('works')
//   }
//   // var hideMenu = function () {
//   //   if (header) {
//   //     if (header.classList.contains('page-header--no-js')) {
//   //       header.classList.remove('page-header--no-js')
//   //     };
//   //     if (header.classList.contains('page-header--nav-open')) {
//   //       header.classList.remove('page-header--nav-open');
//   //       header.classList.add('page-header--nav-closed');
//   //     };
//   //   }
//   // };

//   // var toggleMenu = function () {
//   //   header.classList.toggle('page-header--nav-open');
//   //   header.classList.toggle('page-header--nav-closed');
//   // };

//   // hideMenu();
//   // menuToggle.addEventListener('click', toggleMenu);
// })();

// при изменении ширины окна позишн минус слайд Видтх пока реузльтат больше нуля. позишен = позишен минус остаток
