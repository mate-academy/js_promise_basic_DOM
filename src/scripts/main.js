'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', resolve);
});

promise1.then(addSuccessHandler);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise2.catch(addErrorHandler);

function addSuccessHandler() {
  document.body.insertAdjacentHTML(
    'beforeend',
    '<div class="message">Promise was resolved!</div>',
  );
}

function addErrorHandler() {
  document.body.insertAdjacentHTML(
    'beforeend',
    '<div class="message error-message">Promise was rejected!</div>',
  );
}
