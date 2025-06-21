'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Done');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

promise1
  .then(function (result) {
    document.body.insertAdjacentHTML('afterbegin', '<div class="message">');
    document.querySelector('.message').innerHTML = 'Promise was resolved!';
  })
  .catch(function (resul) {
    document.body.insertAdjacentHTML(
      'afterbegin',
      '<div class="message error-message">',
    );

    document.querySelector('.error-message').innerHTML =
      'Promise was rejected!';
  });

promise2
  .then(function (result) {
    document.body.insertAdjacentHTML('afterbegin', '<div class="message">');
    document.querySelector('.message').innerHTML = 'Promise was resolved!';
  })
  .catch(function (resul) {
    document.body.insertAdjacentHTML(
      'afterbegin',
      '<div class="message error-message">',
    );

    document.querySelector('.error-message').innerHTML =
      'Promise was rejected!';
  });
