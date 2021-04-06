'use strict';

const logo = document.querySelector('.logo');

const successPromise = new Promise(resolve => {
  logo.addEventListener('click', () => resolve());
});

const errorPromise = new Promise((resolve, reject) => {
  setInterval(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

const touchMessage = (element, className, textContent) => {
  const message = window['message' + element]
    = document.createElement('div');

  message.className = className;
  message.textContent = textContent;
  logo.after(message);
};

successPromise.then(() => {
  touchMessage(`Success`, 'message', 'Promise was resolved!');
});

errorPromise.catch(() => {
  touchMessage(`Error`, 'error-message', 'Promise was rejected!');
});
