'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', (e) => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

const successMessage = () => {
  return createMessage('message', 'Promise was resolved!');
};

const errorMessage = () => {
  return createMessage('error-message', 'Promise was rejected!');
};

promise1
  .then(successMessage);

promise2
  .catch(errorMessage);

function createMessage(classForDiv, messageText) {
  const div = document.createElement('div');

  logo.after(div);
  div.classList.add(classForDiv);
  div.innerText = messageText;
}
