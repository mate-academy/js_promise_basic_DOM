'use strict';

const logo = document.querySelector('.logo');

function waitForClick(element) {
  return new Promise((resolve) => {
    element.addEventListener('click', () => resolve('Element was clicked'), {
      once: true,
    });
  });
}

function successMessage() {
  const div = document.createElement('div');

  div.innerText = 'Promise was resolved!';
  div.className = 'message';

  return div;
}

function errorMesssage(err) {
  const div = document.createElement('div');

  div.innerText = 'Promise was rejected!';
  div.className = 'message error-message';
  Error(err);

  return div;
}

function handleSuccess() {
  const message = successMessage();

  document.body.append(message);
}

function handleError(err) {
  const message = errorMesssage(err);

  document.body.append(message);
}

if (logo) {
  const promise1 = waitForClick(logo);

  promise1.then(handleSuccess).catch(handleError);
}

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error(`Timeout exceeded`)), 3000);
});

promise2.catch(handleError);
