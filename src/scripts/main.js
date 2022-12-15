'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

function createMessage(message, type) {
  const block = document.createElement('div');

  block.className = type;
  block.textContent = message;
  body.append(block);
}

function createPromise() {
  const resolver = (succes) => {
    logo.addEventListener('click', () => {
      const obj = {
        text: `Promise was resolved!`,
        class: 'message',
      };

      succes(obj);
    });
  };

  return new Promise(resolver);
};

function createPromise2() {
  const resolver = (succes, error) => {
    const errorMessage = {
      text: 'Promise was rejected!',
      class: 'error-message',
    };

    setTimeout(() => {
      error(errorMessage);
    }, 3000);
  };

  return new Promise(resolver);
};

const promise1 = createPromise();
const promise2 = createPromise2();

promise1
  .then((result) => createMessage(result.text, result.class));

promise2
  .catch((error) => createMessage(error.text, error.class));
