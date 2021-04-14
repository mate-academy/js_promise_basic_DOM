'use strict';

const createMessage = (type) => {
  const message = document.createElement('div');

  if (type instanceof Error) {
    message.classList.add('error-message');
    message.innerText = 'Promise was rejected!';

    return message;
  }

  message.classList.add('message');
  message.innerText = 'Promise was resolved!';

  return message;
};

const promiseOne = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve());
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('error')), 3000);
});

const body = document.querySelector('body');

promiseOne
  .then(
    (result) => body.append(createMessage(result))
  );

promiseTwo
  .catch(
    (result) => body.append(createMessage(result))
  );
