document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  const body = document.body;

  // Helper function for appending the required message structure
  const appendMessage = (text, isError = false) => {
    // Since we are in DOMContentLoaded, body is guaranteed to exist.
    const messageDiv = document.createElement('div');

    messageDiv.classList.add('message');

    if (isError) {
      messageDiv.classList.add('error-message');
    }

    messageDiv.textContent = text;
    body.appendChild(messageDiv);
  };

  // --- Promise 1: Resolved on click, or Rejected if .logo is missing ---
  const promise1 = new Promise((resolve, reject) => {
    if (logo) {
      // Resolve path: if logo exists, wait for a click
      logo.addEventListener(
        'click',
        () => {
          resolve();
        },
        { once: true },
      );
    } else {
      // Rejection path: if logo is missing, reject immediately
      reject(new Error('Logo element not found'));
    }
  });

  // Handlers for promise1
  promise1
    .then(() => {
      // Success Handler
      appendMessage('Promise was resolved!', false);
    })
    .catch(() => {
      // Error Handler: Runs if .logo is missing
      appendMessage('Promise was rejected!', true);
    });

  // --- Promise 2: Rejected in 3 seconds ---
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Timeout reached'));
    }, 3000);
  });

  // Handlers for promise2
  promise2
    .then(() => {
      // Success Handler
      appendMessage('Promise was resolved!', false);
    })
    .catch(() => {
      // Error Handler: Runs after 3 seconds
      appendMessage('Promise was rejected!', true);
    });
});
