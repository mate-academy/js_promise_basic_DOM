'use strict';

// write your code here
const clicked = document.querySelector('.logo');

function newMessage(message, messageClass) {
  const newElement = document.createElement('div');

  newElement.className = messageClass;
  newElement.innerText = message;

  return newElement;
}

const approvedMessage = new Promise((resolve, reject) => {
  clicked.addEventListener('click', () => {
    resolve(newMessage('message', 'Promise was resolved!'));
  });
});

const rejectedMessage = new Promise((resolve, reject) => {
  reject(newMessage('error-message message',
    'Promise was rejected!'));
});

approvedMessage.then(
  (result) => document.body.append(result));

rejectedMessage.catch(
  (error) => {
    document.body.append(error);

    setTimeout(() => {
      error.hidden = true;
    }, 3000);
  }
);
