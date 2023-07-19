'use strict';

// const div = document.getElementById('div');
const logo = document.getElementById('logo');

const addMessage = (text, className, className2) => {
  const div = document.createElement('div');

  document.body.append(div);
  div.dataset.qa = 'notification';
  div.classList.add(className);
  div.classList.add(className2);
  div.textContent = text;
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    // resolve('<div class="message">Promise was resolved!</div>');
    resolve();
  });
});

promise1.then(() => addMessage('Promise was resolved!', 'message'));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise2
  .catch(() => addMessage('Promise was rejected!', 'message', 'error-message'));
