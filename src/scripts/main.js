'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logoEl = document.querySelector('.logo');

  logoEl.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

function createDivForHandler(className, textContent) {
  const divEl = document.createElement('div');

  divEl.className = className;
  divEl.textContent = textContent;

  return divEl;
}

function onSuccess() {
  const divEl = createDivForHandler('message', 'Promise was resolved!');

  document.body.append(divEl);
}

function onError() {
  const divEl = createDivForHandler(
    'message error-message',
    'Promise was rejected!',
  );

  document.body.append(divEl);
}

promise1.then(onSuccess).catch(onError);
promise2.then(onSuccess).catch(onError);
