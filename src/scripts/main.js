'use strict';

const init = async() => {
  await createPromise1()
    .then(appendSuccess)
    .catch(appendError);

  await createPromise2()
    .then(appendSuccess)
    .catch(appendError);
};

init();

function createPromise1() {
  return new Promise((resolve, reject) => {
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', () => {
      resolve('Succes!!!');
    });
  });
};

function createPromise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Error!!!'));
    }, 3000);
  });
};

function appendSuccess() {
  const body = document.body;

  body.insertAdjacentHTML('beforeend', `
    <div class="message">Promise was resolved!</div>
    `);
};

function appendError() {
  const body = document.body;

  body.insertAdjacentHTML('beforeend', `
    <div class="error-message">Promise was rejected!</div>
    `);
};
