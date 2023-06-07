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

  // Функція для додавання повідомлення
  function addMessage(text, className = 'message') {
    const message = document.createElement('div');

    message.className = className;
    message.textContent = text;
    body.appendChild(message);
  }

  // Обробники успіху та помилки для promise1
  promise1.then(function() {
    addMessage('Promise was resolved!');
  }).catch(function() {
    addMessage('Promise was rejected!', 'message error-message');
  });

  // Обробники успіху та помилки для promise2
  promise2.then(function() {
    addMessage('Promise was resolved!');
  }).catch(function() {
    addMessage('Promise was rejected!', 'message error-message');
  });
});
