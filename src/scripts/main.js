'use strict';

const logo = document.querySelector('.logo');

function appendMessage(message) {
  let div = `
    <div class="message">
      ${message}
    </div>`;

  if (message instanceof Error) {
    div = `
      <div class="message error-message">
        ${message.message}
      </div>`;
  }
  document.body.innerHTML += div;
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(appendMessage).catch(appendMessage);
promise2.catch(appendMessage);
