'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(result => {
    const message = createMessage(result);

    document.body.append(message);
  });

promise2
  .catch(result => {
    const message = createMessage(result);

    message.classList.add('error-message');
    document.body.append(message);
  });

function createMessage(innerMessage) {
  const message = document.createElement('div');

  message.classList.add('message');
  message.innerHTML = `<p>${innerMessage}</p>`;

  return message;
}
