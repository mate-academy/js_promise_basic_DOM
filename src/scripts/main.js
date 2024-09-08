'use strict';

const logo = document.querySelector('.logo');

function createPromise() {
  return new Promise((resolve, reject) => {
    logo.addEventListener('click', (_event) => {
      if (_event.target === logo) {
        document.body.insertAdjacentHTML(
          'beforeend',
          '<div class="message">Promise was resolved!</div>',
        );

        resolve();
      }
    });

    setTimeout(() => {
      document.body.insertAdjacentHTML(
        'beforeend',
        '<div class="message error-message">Promise was rejected!</div>',
      );

      reject(new Error('Error'));
    }, 3000);
  });
}

createPromise();
