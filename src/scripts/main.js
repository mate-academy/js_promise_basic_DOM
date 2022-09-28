'use strict';

// write your code here
const logo = document.querySelector('.logo');

const callbackPromise = isResolved => {
  return new Promise((resolve, reject) => {
    return isResolved
      ? resolve('Promise was resolved!')
      : reject(new Error('Promise was rejected'));
  });
};

const promise1 = () => callbackPromise(true);

const promise2 = () => callbackPromise(false);

const showText = (text, divClass) => {
  const divTag = document.createElement('div');

  divTag.textContent = text;

  divTag.className = divClass;

  document.body.appendChild(divTag);
};

const callbackSuccess = success => {
  logo.addEventListener('click', () => {
    showText(success, 'message');
  });
};

const callbackError = err => {
  logo.addEventListener('click', () => {
    setTimeout(() => {
      showText(err, 'error-message');
    }, 3000);
  });
};

promise1()
  .then(success => callbackSuccess(success))
  .catch(error => callbackError(error));

promise2()
  .then(success => callbackSuccess(success))
  .catch(error => callbackError(error));
