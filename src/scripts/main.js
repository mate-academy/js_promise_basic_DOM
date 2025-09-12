'use strict';

// Find the logo element on the page
const logo = document.querySelector('.logo');

/**
 * Creates and adds a message to the page
 * @param {string} text - The message text
 * @param {boolean} [isError=false] - If true, adds 'error-message' class
 */
function showMessage(text, isError = false) {
  const message = document.createElement('div');

  message.classList.add('message');

  if (isError) {
    message.classList.add('error-message');
  }
  message.textContent = text;
  document.body.appendChild(message);
}

// Promise resolves when the logo is clicked
const promise1 = new Promise((resolve) => {
  if (logo) {
    // Attach click listener only if logo exists
    logo.addEventListener(
      'click',
      () => {
        resolve();
      },
      { once: true }, // Listener will fire only once
    );
  }
});

promise1.then(() => {
  showMessage('Promise was resolved!');
});

promise1.catch(() => {
  showMessage('Promise was rejected!', true);
});

// Promise rejects after 3 seconds
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise rejected after timeout'));
  }, 3000);
});

promise2.then(() => {
  showMessage('Promise was resolved!');
});

promise2.catch(() => {
  showMessage('Promise was rejected!', true);
});
