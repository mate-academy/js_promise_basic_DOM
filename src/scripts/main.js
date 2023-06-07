'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const logo = document.querySelector('.logo');
  const body = document.querySelector('body');

  const promise1 = new Promise(function(resolve, reject) {
    logo.addEventListener('click', function() {
      resolve();
    });
  });

  const promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject(new Error('Promise rejected!'));
    }, 3000);
  });

  function addMessage(text, className = 'message') {
    const message = document.createElement('div');

    message.className = className;
    message.textContent = text;
    body.appendChild(message);
  }

  promise1.then(function() {
    addMessage('Promise was resolved!');
  }).catch(function() {
    addMessage('Promise was rejected!', 'message error-message');
  });

  promise2.then(function() {
    addMessage('Promise was resolved!');
  }).catch(function() {
    addMessage('Promise was rejected!', 'message error-message');
  });
});
