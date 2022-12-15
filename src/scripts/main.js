'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

function createMessage(message, type) {
  const block = document.createElement('div');

  block.className = type;
  block.textContent = message;
  body.append(block);
}

function createPromiss() {
  const resolver = (succes, error) => {
    logo.addEventListener('click', () => {
      const obj = {
        text: `Promise was resolved!`,
        class: 'message',
      };

      succes(obj);
    });

    logo.addEventListener('click', () => {
      const obj = {
        text: 'Promise was rejected!',
        class: 'error-message',
      };

      error(obj);
    });
  };

  return new Promise(resolver);
};

function createPromiss2() {
  const resolver = (succes, error) => {
    const succesMessage = {
      text: `Promise was resolved!`,
      class: 'message',
    };

    setTimeout(() => {
      succes(succesMessage);
    }, 4000);

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

const promise1 = createPromiss();
const promise2 = createPromiss2();

promise1
  .then((result) => createMessage(result.text, result.class))
  .catch((error) => createMessage(error.text, error.class));

promise2
  .then((result) => createMessage(result.text, result.class))
  .catch((error) => createMessage(error.text, error.class));
