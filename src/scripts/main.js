// scripts/main.js

// 1. Get the logo element and the body
const logo = document.querySelector('.logo');
const body = document.body;

// 2. Helper function to create and append the message div
const appendMessage = (text, isError = false) => {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');

  // Add the error-message class if it's an error
  if (isError) {
    messageDiv.classList.add('error-message');
  }
  // Set the required text content
  messageDiv.textContent = text;
  body.appendChild(messageDiv);
};

// --- Promise 1: Resolved on a click on .logo ---
const promise1 = new Promise((resolve) => {
  // Add a 'click' listener to the logo.
  // The promise resolves when the click event fires.
  logo.addEventListener(
    'click',
    () => {
      resolve(); // Resolve the promise
    },
    { once: true },
  );
});

// Add handlers for promise1
promise1
  .then(() => {
    appendMessage('Promise was resolved!', false);
  })
  .catch(() => {
    // Error Handler: (included for completeness, but not expected to run)
    appendMessage('Promise was rejected!', true);
  });

// --- Promise 2: Rejected in 3 seconds ---
const promise2 = new Promise((resolve, reject) => {
  // Use setTimeout to call reject() after 3000 milliseconds
  setTimeout(() => {
    reject(new Error('Rejected after 3 seconds'));
  }, 3000);
});

// Add handlers for promise2
promise2
  .then(() => {
    // Success Handler: (included for completeness, but not expected to run)
    appendMessage('Promise was resolved!', false);
  })
  .catch(() => {
    appendMessage('Promise was rejected!', true);
  });
