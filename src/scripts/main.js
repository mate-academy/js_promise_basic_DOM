'use strict';

const logo = document.querySelector('.logo');

const showMessage = (className, text) => {
  const div = document.createElement('div');

  document.body.append(div);
  div.classList.add(className);
  div.textContent = text;
};

function createPromise() {
  const resolver = (resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve();
    });

    setTimeout(() => {
      reject();
    }, 3000);
  };

  return new Promise(resolver);
}

const promise1 = createPromise();
const promise2 = createPromise();

promise1.then(() => {
  showMessage('message', `Promise was resolved!`);
});

promise2.catch(() => {
  showMessage('error-message', 'Promise was rejected!');
});
