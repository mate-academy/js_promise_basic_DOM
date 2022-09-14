'use strict';

function createPromise(button) {
  return new Promise((resolve, reject) => {
    button.addEventListener('click', () => {
      resolve();
    });

    setTimeout(() => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject();
    }, 3000);
  });
}

const button1 = document.querySelector('.logo');

const promise1 = createPromise(button1);
const promise2 = createPromise();

promise1.then(() => {
  const element = document.createElement('div');

  element.className = 'message';
  element.innerHTML = 'Promise was resolved!';
  document.body.append(element);
}).catch(() => {
  const element = document.createElement('div');

  element.className = 'message';
  element.innerHTML = 'Promise was rejected!';
  document.body.append(element);
});

promise2.then(null, setTimeout(() => {
  const element = document.createElement('div');

  element.className = 'message';
  element.innerHTML = 'Promise was rejected!';
  document.body.append(element);
}, 3000));
