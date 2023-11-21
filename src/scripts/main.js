'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.getElementById('logo');

  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => setTimeout(reject, 3000));

function appendMessage(text, isError) {
  const message = document.createElement('div');

  message.className = 'message';

  if (isError) {
    message.classList.add('error-message');
  }

  message.textContent = text;
  document.body.appendChild(message);
}

promise1.then(() => {
  appendMessage('Promise was resolved!');
}).catch(() => {
  appendMessage('Promise was rejected!', true);
});

promise2.then(() => {
  appendMessage('Promise was resolved!');
}).catch(() => {
  appendMessage('Promise was rejected!', true);
});
