'use strict';

const promis1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promis2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function getSucces() {
  const newEl = document.createElement('div');

  newEl.classList.add('message');
  newEl.textContent = 'Promise was resolved!';
  document.body.append(newEl);
}

function getError() {
  const newEl = document.createElement('div');

  newEl.classList.add('message', 'error-message');
  newEl.textContent = 'Promise was rejected!';
  document.body.append(newEl);
}

function getPromis() {
  promis1.then(getSucces).catch(getError);

  promis2.catch(getError);
}

getPromis();
