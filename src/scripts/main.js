'use strict';

const logo = document.querySelector('.logo');

function createDiv(...classList) {
  const div = document.createElement('div');

  div.classList.add(...classList);

  return div;
}

logo.addEventListener('click', (e) => {
  const promise1 = new Promise((resolve, reject) => {
    resolve('Promise was resolved!');
  });

  promise1
    .then((data) => {
      const message = createDiv('message');

      message.innerHTML = data;
      document.body.append(message);
    })
    .catch((error) => {
      const message = createDiv('message', 'error-message');

      message.innerHTML = error;
      document.body.append(message);
    });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });

  promise2
    .then((data) => {
      const message = createDiv('message');

      message.innerHTML = data;
      document.body.append(message);
    })
    .catch((error) => {
      const message = createDiv('message', 'error-message');

      message.innerHTML = error.message;
      document.body.append(message);
    });
});
