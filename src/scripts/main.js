'use strict';

function promise1() {
  const logo = document.querySelector('.logo');

  const resolver = (complete) => {
    logo.addEventListener('click', () => {
      complete(`Promise was resolved!`);
    });
  };

  return new Promise(resolver);
}

promise1()
  .then(result => {
    const message = document.createElement('div');

    message.className = 'message';
    message.innerText = result;
    document.body.append(message);
  });

function promise2() {
  const resolver = (complete, cancel) => {
    setTimeout(() => {
      cancel('Promise was rejected!');
    }, 3000);
  };

  return new Promise(resolver);
}

promise2()
  .catch(error => {
    const errorMessage = document.createElement('div');

    errorMessage.className = 'error-message';
    errorMessage.innerText = error;
    document.body.append(errorMessage);
  });
