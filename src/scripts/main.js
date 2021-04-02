'use strict';

const logo = document.querySelector('.logo');
const message = document.querySelector('.message');
const errorMessage = document.querySelector('.error-message');

message.style.visibility = 'hidden';
errorMessage.style.visibility = 'hidden';

const makeVisibleMessage = () => {
  message.style.visibility = 'visible';
};

const makeVisibleErrorMessage = () => {
  errorMessage.style.visibility = 'visible';
};

const messagePromise = new Promise((resolve) => {
  logo.addEventListener('click', resolve);
});

const messageErrorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

messagePromise.then(makeVisibleMessage);
messageErrorPromise.catch(makeVisibleErrorMessage);
