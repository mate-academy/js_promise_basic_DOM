'use strict';

const promise1 = createPromise();
const promise2 = createPromise1();

function createPromise() {
  const logo = document.querySelector('h1');

  const resolver = (resolve, reject) => {
    logo.addEventListener('click', (e) => {
      resolve();
    });

    document.body.addEventListener('click', (e) => {
      reject();
    });
  };

  return new Promise(resolver);
}

function createPromise1() {
  const logo = document.querySelector('h1');

  const resolver = (resolve, reject) => {
    logo.addEventListener('click', (e) => {
      resolve('Promise was resolved!');
    });

    document.body.addEventListener('click', (e) => {
      setTimeout(() => {
        reject('Promise was rejected!');
      }, 2000);
    });
  };

  return new Promise(resolver);
}

promise1
  .then(result => {
    const div = document.createElement('div');

    div.className = 'message';
    div.textContent = result;
    document.body.append(div);
  })
  .catch(error => {
    const div = document.createElement('div');

    div.className = 'error-message';
    div.textContent = `Promise was rejected! ${error}`;
    document.body.append(div);
  });

promise2
  .then(result => {
    const div = document.createElement('div');

    div.className = 'message';
    div.textContent = 'Promise was resolved!';
    document.body.append(div);
  })
  .catch(error => {
    const div = document.createElement('div');

    div.className = 'error-message';
    div.textContent = error;
    document.body.append(div);
  });
