'use strict';

// Function to append messages to the body
function appendMessage(text, isError = false) {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';

  if (isError) {
    messageDiv.classList.add('error-message');
  }
  messageDiv.textContent = text;
  document.body.appendChild(messageDiv);
}

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

// Success handler for promise1
promise1.then(() => {
  appendMessage('Promise was resolved!');
});

// Error handler for promise2
promise2.catch(() => {
  appendMessage('Promise was rejected!', true);
});
