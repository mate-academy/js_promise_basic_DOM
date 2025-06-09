'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

// ✅ Create promise2: Rejects after 3 seconds
const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject('Promise was rejected!');
  }, 3000);
});

// ✅ Success handler: Appends success message to body
const successHandler = (message) => {
  const div = document.createElement('div');
  div.className = 'message';
  div.textContent = message;
  document.body.appendChild(div);
};

// ✅ Error handler: Appends error message to body
const errorHandler = (errorMessage) => {
  const div = document.createElement('div');
  div.className = 'message error-message';
  div.textContent = errorMessage;
  document.body.appendChild(div);
};

// ✅ Attach handlers to both promises
promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
