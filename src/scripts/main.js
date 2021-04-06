'use strict';

const logo = document.querySelector('.logo');

const successPromise = new Promise(resolve => {
  logo.addEventListener('click', () => resolve());
});

const errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

const touchMessage = (element, className, textContent) => {
  const messages = {
    [`${element}`]: document.createElement('div'),
  };

  messages[element].className = className;
  messages[element].textContent = textContent;
  logo.after(messages[element]);
};

successPromise.then(() => {
  touchMessage(`Success`, 'message', 'Promise was resolved!');
});

errorPromise.catch(() => {
  touchMessage(`Error`, 'error-message', 'Promise was rejected!');
});
