'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  if (logo) {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  } else {
    // eslint-disable-next-line no-console
    console.error('.logo element not found in the DOM.');
  }
});

// eslint-disable-next-line promise/param-names, no-unused-vars
const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function addMessage(text, isError = false) {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';

  if (isError) {
    messageDiv.classList.add('error-message');
  }
  messageDiv.textContent = text;
  document.body.appendChild(messageDiv);
}

promise1
  .then((message) => {
    addMessage(message);
  })
  .catch((error) => {
    addMessage(error, true);
  });

promise2
  .then((message) => {
    addMessage(message);
  })
  .catch((error) => {
    addMessage(error, true);
  });
