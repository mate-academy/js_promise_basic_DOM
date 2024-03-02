/* eslint-disable no-console */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');

  if (logo) {
    const successItem = `<div class="message">Promise was resolved!</div>`;
    const errorItem = `<div class="message error-message">Promise was rejected!</div>`;
    const promise1 = Promise.resolve(successItem);
    const promise2 = Promise.reject(errorItem);

    const setItemToBody = (item) => {
      document.body.insertAdjacentHTML('afterbegin', item);
    };

    logo.addEventListener('click', () => {
      promise1
        .then((data) => setItemToBody(data))
        .catch((error) => console.error(error));

      setTimeout(() => {
        promise2
          .then((data) => setItemToBody(data))
          .catch((data) => setItemToBody(data));
      }, 3000);
    });
  }
});
