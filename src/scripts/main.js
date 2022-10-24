'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected')), 3000);
});

promise1.then(onSuccess);
promise2.catch(onError);

function onSuccess() {
  newMessage('message', 'Promise was resolved!');
}

function onError() {
  newMessage('error-message', 'Promise was rejected!');
}

function newMessage(classMessage, message) {
  const divMessage = document.createElement('div');

  divMessage.className = classMessage;
  divMessage.textContent = message;
  document.body.append(divMessage);
}
