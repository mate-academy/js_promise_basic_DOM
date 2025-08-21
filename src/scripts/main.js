'use strict';

const showMessage = (text, className) => {
  const newDiv = document.createElement('div');

  newDiv.className = className;
  newDiv.innerText = text;

  document.body.append(newDiv);
};

const resolvedPromise = () =>
  new Promise((resolve) => {
    const logoElement = document.querySelector('.logo');
    const text = 'Promise was resolved!';

    if (logoElement) {
      logoElement.addEventListener('click', () => resolve(text));
    }
  });

resolvedPromise()
  .then((text) => {
    showMessage(text, 'message');
  })
  .catch(() => showMessage('Promise was rejected!', 'message error-message'));

const rejectedPromise = (ms) =>
  new Promise((resolve, reject) => {
    const error = new Error('Promise was rejected!');

    setTimeout(() => {
      reject(error);
    }, ms);
  });

rejectedPromise(3000)
  .then(() => {
    showMessage('Promise was resolved!', 'message');
  })
  .catch(() => {
    showMessage('Promise was rejected!', 'message error-message');
  });
