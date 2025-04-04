'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');

  // Success handler
  function handleSuccess() {
    const message = document.createElement('div');

    message.classList.add('message');
    message.textContent = 'Promise was resolved!';
    document.body.appendChild(message);
  }

  // Error handler
  function handleError(error) {
    const message = document.createElement('div');

    message.classList.add('message', 'error-message');
    message.textContent = `Promise was rejected! ${error instanceof Error ? '' : String(error)}`;
    document.body.appendChild(message);
  }

  // Promise that resolves on click
  const onLogoClick = new Promise((resolve) => {
    if (logo) {
      logo.addEventListener('click', () => resolve());
    }
  });

  // Promise that rejects in 3 seconds
  const timeoutReject = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Rejected after 3 seconds')), 3000);
  });

  // Use the promises to avoid 'unused' errors
  onLogoClick.then(handleSuccess).catch(handleError);
  timeoutReject.then(handleSuccess).catch(handleError);
});
