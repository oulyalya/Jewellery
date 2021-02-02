// 'use strict';

// (function () {
//   if (document.querySelector('.product')) {
//     var productCard = document.querySelector('.product');
//     var descriptionBtn = productCard.querySelector('.product__tab-btn--description');
//     var featuresBtn = productCard.querySelector('.product__tab-btn--features');
//     var descriptionTab = productCard.querySelector('.product__tab--description');
//     var featuresTab = productCard.querySelector('.product__tab--features');

//     var productInfo = {
//       descriptionBtn: 'descriptionTab',
//       featuresBtn: 'featuresTab',
//     }


//     // on button product__tab-btn--current
//     //  on tab product__tab--current

//     var switchTab = function (btn) {
//       btn.onclick = function () {

//         var currentTab = productInfo[btn];
//         // productInfo[btn].classList.add('product__tab--current');
//         btn.style.background = 'red';
//         console.log(productInfo[btn]);
//         console.log(btn);
//         console.log('1')
//       }
//     }

//     switchTab(descriptionBtn);
//     switchTab(featuresBtn)


//     productInfo.forEach((btn) => switchTab(btn));
//   }
// })();
