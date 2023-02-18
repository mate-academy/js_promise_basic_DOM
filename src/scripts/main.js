'use strict';

// write your code here

const logoMa = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logoMa.addEventListener('click', () => {
    resolve();
  });
});

promise1
  .then(
    () => {
      body.insertAdjacentHTML(
        'afterbegin', `
        <div class="message">Promise was resolved!<div>
      `);
    })
  .catch();

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise2
  .then()
  .catch(() => {
    body.insertAdjacentHTML(
      'afterbegin', `
        <div class="message error-message">Promise was rejected!<div>
      `);
  });
