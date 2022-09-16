'use strict';

function createPromise1(button) {
  return new Promise((resolve, reject) => {
    button.addEventListener('click', () => {
      resolve();
    });

    setTimeout(() => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject();
    }, 3000);
  });
}

function createPromise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject();
    }, 3000);
  });
}

const button1 = document.querySelector('.logo');

const promise1 = createPromise1(button1);
const promise2 = createPromise2();

promise1.then(() => {
  const element = document.createElement('div');

  element.className = 'message';
  element.innerHTML = 'Promise was resolved!';
  document.body.append(element);
}).catch(() => {
  const element = document.createElement('div');

  element.className = 'message';
  element.innerHTML = 'Promise was rejected!';
  document.body.append(element);
});

promise2.catch(() => {
  const element = document.createElement('div');

  element.className = 'message';
  element.innerHTML = 'Promise was rejected!';
  document.body.append(element);
});
