'use strict';

(function () {
  var accordionBlocks = document.querySelectorAll('.accordion__item');
  var accordionBlockHeaders = document.querySelectorAll('.accordion__item-header');

  var hideBlocks = function (blocks) {
    blocks.forEach(function (item) {
      item.closest('.accordion__item').classList.add('accordion__item--hidden');
    });
  };

  var removeActiveBlock = function (blocks) {
    if (blocks.length > 0) {
      blocks.forEach(function (block) {
        block.classList.remove('accordion__item--shown');
        block.classList.add('accordion__item--hidden');
      });
    }
  };

  var changeActiveBlockHandler = function (evt) {
    var currentBlock = evt.target.closest('.accordion__item');

    if (!currentBlock.classList.contains('accordion__item--shown')) {
      removeActiveBlock(accordionBlocks);
    }

    currentBlock.classList.toggle('accordion__item--shown');
    currentBlock.classList.toggle('accordion__item--hidden');
  };

  hideBlocks(accordionBlocks);
  accordionBlockHeaders.forEach(function (item) {
    item.addEventListener('click', changeActiveBlockHandler);
  });
})();
