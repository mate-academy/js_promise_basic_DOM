'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const creatPromiseLogo = new Promise(
  (resolve) => {
    logo.addEventListener('click', () => {
      resolve();
    });
  });

const creatPromiseError = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      reject(new Error());
    }, 3000);
  });

creatPromiseLogo.then(() => body.insertAdjacentHTML('beforeend', `
  <div class="message">Promise was resolved!</div>`));

creatPromiseError.catch(() => body.insertAdjacentHTML('beforeend', `
  <div class="error-message">Promise was rejected!</div>`));
