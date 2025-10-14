document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  const body = document.body;

  const appendMessage = (text, isError = false) => {
    if (!body) {
      return;
    }

    const messageDiv = document.createElement('div');

    messageDiv.classList.add('message');

    if (isError) {
      messageDiv.classList.add('error-message');
    }

    messageDiv.textContent = text;
    body.appendChild(messageDiv);
  };

  const promise1 = new Promise((resolve) => {
    if (logo) {
      logo.addEventListener(
        'click',
        () => {
          resolve();
        },
        { once: true },
      );
    }
  });

  promise1
    .then(() => {
      appendMessage('Promise was resolved!', false);
    })
    .catch(() => {
      appendMessage('Promise was rejected!', true);
    });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Rejected after 3 seconds'));
    }, 3000);
  });

  promise2
    .then(() => {
      appendMessage('Promise was resolved!', false);
    })
    .catch(() => {
      appendMessage('Promise was rejected!', true);
    });

  if (!logo) {
    appendMessage("Error: The '.logo' element was not found in the DOM.", true);
  }
});
