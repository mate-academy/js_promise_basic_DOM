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

    const addTimeOut = (item) => {
      let time = null;

      clearTimeout(time);
      time = setTimeout(() => setItemToBody(item), 3000);
    };

    logo.addEventListener('click', () => {
      promise1
        .then((data) => setItemToBody(data))
        .catch((error) => addTimeOut(error));

      promise2
        .then((data) => setItemToBody(data))
        .catch((error) => addTimeOut(error));
    });
  }
});
