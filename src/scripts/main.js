'use strict';

function createPromise1() {
  const logo = document.querySelector('h1');

  const resolve = (complete, cancel) => {
    logo.addEventListener('click', () => {
      complete('Promise was resolved!');
    });
  };

  return new Promise(resolve);
}

createPromise1()
  .then(result => {
    const addition = document.createElement('div');

    addition.className = 'message';
    addition.innerHTML = result;
    document.body.append(addition);
  });

function createPromise2() {
  const resolver = (complete, cancel) => {
    setTimeout(() => {
      cancel('Promise was rejected!');
    }, 3000);
  };

  return new Promise(resolver);
}

createPromise2()
  .catch(error => {
    const messageError = document.createElement('div');

    messageError.className = 'error-message';
    messageError.innerHTML = error;
    document.body.append(messageError);
  });
