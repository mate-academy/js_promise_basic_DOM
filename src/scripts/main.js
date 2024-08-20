'use strict';

const successMessage = '<div class="message">Promise was resolved!</div>';

const errorMessage =
  '<div class="message error-message">Promise was rejected!</div>';

const body = document.querySelector('body');

const logo = document.querySelector('.logo');

function promise1() {
  try {
    logo.addEventListener('click', () => {
      body.insertAdjacentHTML('afterbegin', successMessage);
    });
  } catch (error) {}
}
promise1();

function promise2() {
  try {
    setTimeout(() => {
      body.insertAdjacentHTML('afterbegin', errorMessage);
    }, 2000);
  } catch (error) {}
}
promise2();
