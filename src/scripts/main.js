'use strict';

// promise1: resolves when user clicks on element with class .logo
const promise1 = new Promise((resolve, reject) => {
  const logoEl = document.querySelector('.logo');

  if (logoEl) {
    logoEl.addEventListener(
      'click',
      () => {
        resolve('Promise1 resolved');
      },
      { once: true }, // ensures handler runs only once
    );
  }
  // If .logo is not found, do nothing (promise stays pending)
});

// promise2: rejects automatically after 3 seconds
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise2 rejected'));
  }, 3000);
});

// Helper functions to handle success and error
function handleSuccess() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
}

function handleError() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
}

// Attach handlers
promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
