'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

function createPromiss() {
  const resolver = (succes, error) => {
    logo.addEventListener('click', () => {
      const message = document.createElement('div');

      message.className = 'message';
      message.textContent = 'Promise was resolved!';
      body.append(message);

      succes();
    });

    logo.addEventListener('click', () => {
      const messageError = document.createElement('div');

      messageError.className = 'error-message';
      messageError.textContent = 'Promise was rejected!';
      body.append(messageError);
      error();
    });
  };

  return new Promise(resolver);
};

function createPromiss2() {
  const resolver = (succes, error) => {
    logo.addEventListener('click', () => {
      const message = document.createElement('div');

      message.className = 'message';
      message.textContent = 'Promise was resolved!';
      body.append(message);

      succes();
    });

    logo.addEventListener('click', () => {
      const messageError = document.createElement('div');

      messageError.className = 'error-message';
      messageError.textContent = 'Promise was rejected!';
      body.append(messageError);

      setTimeout(() => {
        body.remove(messageError);
      }, 3000);
      error();
    });
  };

  return new Promise(resolver);
};

const promise1 = createPromiss();
const promise2 = createPromiss2();

promise1
  .then(result => {
    return result;
  })
  .catch(error => {
    return error;
  });

promise2
  .then(result => {
    return result;
  })
  .catch(error => {
    return error;
  });
