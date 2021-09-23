'use strict';

function createPromise() {
  const root = document.querySelector('body');

  const resolver = (resolve, reject) => {
    root.addEventListener('click', (e) => {
      const target = e.target.closest('.logo');

      if (target) {
        resolve(root);
      } else {
        reject(root);
      }
    });
  };

  return new Promise(resolver);
};

const promise = createPromise();

promise
  .then((res) => {
    const message = document.createElement('div');

    message.classList.add('message');
    message.innerText = 'Promise was resolved!';
    res.append(message);
  })
  .catch((res) => {
    const message = document.createElement('div');

    message.classList.add('error-message');
    message.innerText = 'Promise was rejected!';
    res.append(message);

    setTimeout(() => {
      message.remove();
    }, 3000);
  });
