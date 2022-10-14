'use strict';

const logo = document.querySelector('.logo');
const div = document.createElement('div');

logo.append(div);

function createPromisse() {
  const resolver = (complete) => {
    logo.addEventListener('click', () => {
      complete();
    });
  };

  return new Promise(resolver);
}

const ordeal = createPromisse();

ordeal.then(onSuccess, onError);

function onSuccess() {
  div.className = 'message';
  div.innerHTML = 'Promise was resolved!';
}

function onError() {
  div.className = 'error-message';
  div.innerHTML = 'Promise was rejected!';
}

setTimeout(onError, 3000);
