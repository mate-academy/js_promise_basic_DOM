'use strict';

const body = document.querySelector('body');
const logo = body.querySelector('.logo');

function createPromise() {
  const promise1 = new Promise((resolve, reject) => {
    const result = Math.random() > 0;

    if (result) {
      resolve('Promise was resolved!');
    } else {
      reject(new Error('Promise was rejected!'));
    }
  });

  return promise1;
}

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
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

    newElement.textContent = 'Promise was rejected!';
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
      const resolve = await createPromise();

      newElement.textContent = resolve;
    } catch (errorMessage) {
      newElement.classList.add('error-message');

      newElement.textContent = 'Promise was rejected';
    } finally {
      body.append(newElement);
    }
  }

  promiseFirst();
});
