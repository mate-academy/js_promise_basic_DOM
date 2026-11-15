'use strict';

const bodyEl = document.body;
const logoEl = document.querySelector('h1.logo');

const messageEl = document.createElement('div');

messageEl.classList.add('message');
messageEl.textContent = 'Promise was resolved!';

const errorMessageEl = document.createElement('div');

errorMessageEl.classList.add('message', 'error-message');
errorMessageEl.textContent = 'Promise was rejected!';

function onSuccess() {
  bodyEl.append(messageEl);
}

function onError() {
  bodyEl.append(errorMessageEl);
}

const promise1 = new Promise((resolve) => {
  logoEl.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(onSuccess).catch(onError);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise2.then(onSuccess).catch(onError);
