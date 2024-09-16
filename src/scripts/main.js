/* eslint-disable promise/param-names */
/* eslint-disable no-console */
'use strict';

const div = document.createElement('div');

document.body.append(div);

const formatElement = (element, className, message) => {
  element.className = className;
  element.textContent = message;
};

const onSuccess = result => {
  const [className, message] = result;

  formatElement(div, className, message);
};

const onError = error => {
  const [className, message] = error;

  formatElement(div, className, message);
};

const promise1 = new Promise(resolve => {
  const logo = document.body.querySelector('.logo');

  logo.addEventListener('click', () =>
    resolve(['message', 'Promise was resolved!']));
});

const executor = reject =>
  setTimeout(() =>
    reject(['error-message', 'Promise was rejected!']), 3000);

const promise2 = promise1
  .then(result => {
    onSuccess(result);

    return new Promise(executor);
  })
  .catch(error => onError(error));

promise2
  .then(result => onSuccess(result))
  .catch(error => onError(error));
