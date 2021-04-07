'use strict';

const logo = document.querySelector('.logo');

function onClickResolve() {
  const block = document.createElement('div');

  block.classList.add('message');
  block.textContent = 'Promise was resolved!';
  document.body.append(block);
}

function onReject() {
  const block = document.createElement('div');

  block.classList.add('error-message');
  block.textContent = 'Promise was rejected!';

  return block;
}

const promiseOne = new Promise(resolve => {
  logo.addEventListener('click', resolve);
});

const promiseTwo = Promise.reject(onReject());

promiseOne
  .then(onClickResolve);

promiseTwo
  .catch((error) => {
    setTimeout(() => {
      document.body.append(error);
    }, 3000);
  });
