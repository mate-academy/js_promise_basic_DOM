'use strict';

const root = document.querySelector('body');
const logotype = document.querySelector('.logo');
const block = document.createElement('div');
const errorBlock = document.createElement('div');
const blockText = 'Promise was resolved!';
const errorBlockText = 'Promise was rejected!';

block.className = 'message';
errorBlock.className = 'error-message';

logotype.addEventListener('click', e => {
  const promise1 = Promise.resolve(blockText);

  promise1.then(item => {
    block.innerText = item;
    root.append(block);
  });
});

const promise2 = Promise.reject(errorBlockText);

setTimeout(() => {
  promise2.catch(error => {
    block.innerText = error;
    root.append(block);
  });
}, 3000);
