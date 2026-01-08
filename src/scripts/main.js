'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');
let timer;

function clickOnLogo() {
  const promise1 = new Promise((resolve) => {
    logo.addEventListener(
      'click',
      () => {
        resolve('Promise was resolved!');
      },
      { once: true },
    );
  });

  const promise2 = new Promise((resolve, reject) => {
    timer = setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });

  promise1.then((message) => {
    clearTimeout(timer);

    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = message;
    body.append(div);
  });

  promise2.catch((error) => {
    clearTimeout(timer);

    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.textContent = error.message;
    body.append(div);
  });
}

clickOnLogo();
