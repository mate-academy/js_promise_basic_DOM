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

const body = document.querySelector('body');

new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve());
})
  .then(
    (result) => body.append(createMessage(result))
  );

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error'));
  }, 3000);
})
  .catch(
    (result) => body.append(createMessage(result))
  );
