'use strict';

const logo = document.querySelector('.logo');

function createPromise(message) {
  return new Promise((resolve, reject) => {
    if (!message) {
      resolve('Promise was resolved!');
    } else {
      setTimeout(() => reject(message), 3000);
    }
  });
}

function handleLogoClick() {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');

  const promise1 = createPromise();
  const promise2 = createPromise('Promise was rejected!');

  promise1.then((result) => {
    messageDiv.innerText = result;
    document.body.appendChild(messageDiv);
  });

  setTimeout(() => {
    promise2.catch((error) => {
      messageDiv.classList.add('error-message');
      messageDiv.innerText = error;
    });
  }, 3000);
}

if (logo) {
  logo.addEventListener('click', handleLogoClick);
}
