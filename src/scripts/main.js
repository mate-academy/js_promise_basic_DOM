'use strict';

const logo = document.querySelector('.logo');

const createNotification = (className, text) => {
  document.body.insertAdjacentHTML('afterbegin', `
      <div class="${className}">
        ${text}
      </div>
  `);
};

const successNotification = () =>
  createNotification('message', 'Promise was resolved!');

const errorNotification = () =>
  createNotification('error-message', 'Promise was rejected!');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1
  .then(successNotification)
  .catch(errorNotification);

promise2
  .then(successNotification)
  .catch(errorNotification);
