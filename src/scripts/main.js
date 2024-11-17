'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logoElement = document.querySelector('.logo');

  if (logoElement) {
    logoElement.addEventListener('click', () => {
      resolve('Logo pushed');
    });
  } else {
    reject(new Error('Logo didn`t push'));
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise rejected after 3 seconds'));
  }, 3000);
});

function createMessage(message, isError = false) {
  const div = document.createElement('div');

  div.classList.add('message');

  if (isError) {
    div.classList.add('error-message');
  }
  div.innerText = message;
  document.body.appendChild(div);
}

promise1
  .then((result) => createMessage('Promise was resolved!'))
  .catch((error) => createMessage(error.message, true));

promise2
  .then((result) => createMessage('Promise was resolved!'))
  .catch((error) => createMessage(error.message, true));
