'use strict';

const body = document.querySelector('body');
const logo = body.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  if (logo) {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  }
});

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

async function promiseFirst() {
  const newElement = document.createElement('div');

  newElement.classList.add('message');

  try {
    const resolve = await promise1;

    newElement.textContent = resolve;
  } catch (errorMessage) {
    newElement.classList.add('error-message');

    newElement.textContent = 'Promise was rejected!';
  } finally {
    body.append(newElement);
  }
}

promiseFirst();
