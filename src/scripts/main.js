'use strict';

const logo = document.querySelector('.logo');

function createMessage() {
  const message = document.createElement('div');

  message.classList.add('message');

  return message;
}

const firstMessage = createMessage();
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    const resolvedValue = 'Promise was resolved!';

    resolve(resolvedValue);
  });
});

promise1.then((resolvedValue) => {
  firstMessage.innerText = resolvedValue;
  document.body.appendChild(firstMessage);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rejectedValue = 'Promise was rejected!';

    reject(rejectedValue);
  }, 3000);
});

const secondMessage = createMessage();

promise2.catch((rejectedValue) => {
  secondMessage.classList.add('error-message');
  secondMessage.innerText = rejectedValue;
  document.body.appendChild(secondMessage);
});
