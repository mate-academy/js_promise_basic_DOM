'use strict';

const image = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  image.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const showMessage = (text, isError = false) => {
  const wrapper = document.createElement('div');

  wrapper.classList.add('message');

  if (isError) {
    wrapper.classList.add('error-message');
  }

  wrapper.textContent = text;
  document.body.appendChild(wrapper);
};

promise1.then((message) => showMessage(message));

promise2.catch((error) => showMessage(error, true));
