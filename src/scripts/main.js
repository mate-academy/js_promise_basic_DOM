'use strict';

const logo = document.querySelector('.logo');

logo.addEventListener('click', (e) => {
  const logoEL = e.target.closest('.logo');

  if (!logoEL) {
    return;
  }

  e.preventDefault();

  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = document.createElement('div');

      message.classList.add('message');
      message.textContent = 'Promise was resolved!';
      resolve('true');

      logo.append(message);
    }, 1000);
  });

  return promise1;
});

setTimeout(() => {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('message');
  errorMessage.classList.add('error-message');
  errorMessage.textContent = 'Promise was rejected!';

  document.body.append(errorMessage);
}, 3000);
