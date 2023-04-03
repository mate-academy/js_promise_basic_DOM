'use strict';

const logo = document.querySelector('.logo');

function createDiv(divClass) {
  const div = document.createElement('div');

  div.className = divClass;

  if (divClass === 'message') {
    div.textContent = 'Promise was resolved!';
  } else {
    div.textContent = 'Promise was rejected!';
  }

  return div;
}

const promise1 = new Promise(resolve => resolve(createDiv('message')));

const promise2 = new Promise(
  (resolve, reject) => setTimeout(() => {
    reject(createDiv('error-message'));
  }, 3000));

logo.addEventListener(
  'click',
  () => promise1.then(successDiv => {
    document.body.append(successDiv);
  }),
  { once: true }
);

promise2.catch(errorDiv => document.body.append(errorDiv));
