'use strict';

const body = document.querySelector('body');
const logo = body.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  const result = Math.random() > 0;

  if (result) {
    resolve('Promise was resolved!');
  } else {
    reject(new Error('Promise was rejected!'));
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = Math.random() < 0;

    if (result) {
      resolve('Promise was resolved!');
    } else {
      reject(new Error('Promise was rejected!'));
    }
  }, 3000);
});

async function promiseSecond() {
  const newElement = document.createElement('div');

  newElement.classList.add('message');

  try {
    const resolve = await promise2;

    newElement.textContent = resolve;
  } catch (errorMessage) {
    newElement.classList.add('error-message');

    newElement.textContent = errorMessage;
  } finally {
    body.append(newElement);
  }
}

promiseSecond();

logo.addEventListener('click', () => {
  const newElement = document.createElement('div');

  newElement.classList.add('message');

  async function promiseFirst() {
    try {
      const resolve = await promise1;

      newElement.textContent = resolve;
    } catch (errorMessage) {
      newElement.classList.add('error-message');

      newElement.textContent = errorMessage;
    } finally {
      body.append(newElement);
    }
  }

  promiseFirst();
});
