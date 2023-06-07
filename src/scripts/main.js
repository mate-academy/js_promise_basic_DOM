'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const logo = document.querySelector('.logo');
  const body = document.querySelector('body');

  // Promise 1
  const promise1 = new Promise(function(resolve, reject) {
    logo.addEventListener('click', function() {
      resolve();
    });
  });

  // Promise 2
  const promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject(new Error('Promise rejected!'));
    }, 3000);
  });

  // Обробники успіху та помилки для promise1
  promise1.then(function() {
    const message = document.createElement('div');

    message.className = 'message';
    message.textContent = 'Promise was resolved!';
    body.appendChild(message);
  }).catch(function() {
    const message = document.createElement('div');

    message.className = 'message error-message';
    message.textContent = 'Promise was rejected!';
    body.appendChild(message);
  });

  // Обробники успіху та помилки для promise2
  promise2.then(function() {
    const message = document.createElement('div');

    message.className = 'message';
    message.textContent = 'Promise was resolved!';
    body.appendChild(message);
  }).catch(function() {
    const message = document.createElement('div');

    message.className = 'message error-message';
    message.textContent = 'Promise was rejected!';
    body.appendChild(message);
  });
});
