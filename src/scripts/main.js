'use strict';

const TIME_OUT = 3000;

const logo = document.querySelector('.logo');

logo.style.cursor = 'pointer';

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () =>{
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, TIME_OUT);
});

function addMessage(text, isError = false) {
  const newMessage = document.createElement('div');

  if(isError) {
    newMessage.classList.add('error-message');
  }

  newMessage.classList.add('message');

  newMessage.textContent = text;
  document.body.appendChild(newMessage);
}

promise1
  .then((message) => addMessage(message))
  .catch((error) => addMessage(error.message, true));

promise2
  .then((message) => addMessage(message))
  .catch((error) => addMessage(error.message, true));
