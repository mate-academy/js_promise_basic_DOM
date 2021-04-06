'use strict';

const logo = document.querySelector('.logo');
const successMessage = document.createElement('div');
const errorMessage = document.createElement('div');

const click = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const error = new Promise((resolve, reject) => {
  setInterval(() => {
    reject(new Error());
  }, 3000);
});

const touchMessage = (element, className, textContent) => {
  element.className = className;
  element.textContent = textContent;
  logo.after(element);
};

click.then(() => {
  touchMessage(successMessage, 'message', 'Promise was resolved!');
});

error.catch(() => {
  touchMessage(errorMessage, 'error-message', 'Promise was rejected!');
});
