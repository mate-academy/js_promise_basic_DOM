'use strict';

// write your code here
const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', resolve);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1.then(
  () => {
    addMessage('Promise was resolved!');
  },
  () => {
    addMessage('Promise was rejected!', true);
  },
);

promise2.then(
  () => {
    addMessage('Promise was resolved!');
  },
  () => {
    addMessage('Promise was rejected!', true);
  },
);

function addMessage(text, isError = false) {
  const message = document.createElement('div');

  message.textContent = text;

  if (isError) {
    message.className = 'message error-message';
  } else {
    message.className = 'message';
  }

  document.body.append(message);
}
