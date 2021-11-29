'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  })
})

const promise2 = Promise.reject(Error);

promise1.then(addNotification);

promise2
  .catch(
    setTimeout(() => {
      addNotification('Promise was rejected!', 'error-message');
    }, 3000)
  );

function addNotification(message, className) {
  const div = document.createElement('div');

  div.textContent = message;
  div.classList.add('message', className);

  body.append(div);
}
