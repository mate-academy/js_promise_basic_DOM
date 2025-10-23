'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');

  if (!logo) {
    return;
  }

  const promise1 = new Promise((resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve();
    });
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error()), 3000);
  });

  promise1.then(addSuccess, addError);
  promise2.then(addSuccess, addError);

  function addSuccess() {
    document.body.insertAdjacentHTML(
      'beforeend',
      '<div class="message">Promise was resolved!</div>',
    );
  }

  function addError() {
    document.body.insertAdjacentHTML(
      'beforeend',
      '<div class="message error-message">Promise was rejected!</div>',
    );
  }
});
