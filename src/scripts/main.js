'use strict';

const logo = document.body.querySelector('.logo');

function formMessage(className, text) {
  const message = document.createElement('div');

  message.className = className;
  message.textContent = text;
  document.body.append(message);
}

const firstPromise = new Promise(function(resolve, reject) {
  logo.addEventListener('click', resolve);
});

firstPromise
  .then(() => {
    formMessage('message', 'Promise was resolved!');
  });

const secondPromise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error()), 3000);
});

secondPromise.catch(() =>
  formMessage('error-message', 'Promise was rejected!')
);
