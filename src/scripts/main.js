'use strict';

const logo = document.querySelector('.logo');

const newMessage = (messageText) => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.innerText = messageText;

  return message;
};

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  const error = new Error('Promise was rejected!');

  setTimeout(() => {
    reject(error);
  }, 3000);
});

promise1.then((message) => {
  const message1 = newMessage(message);

  document.body.append(message1);
});

promise2.catch((error) => {
  const message2 = newMessage(error);

  message2.classList.add('error-message');

  document.body.append(message2);
});
