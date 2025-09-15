'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const logoElement = document.querySelector('.logo');

  // promise1 — resolved upon click event
  const promise1 = new Promise((resolve) => {
    logoElement.addEventListener('click', () => {
      resolve(); // click === resolve promise
    });
  });

  promise1
    .then(() => {
      // append message to body
      const div = document.createElement('div');

      div.className = 'message';
      div.textContent = 'Promise was resolved!';
      document.body.appendChild(div);
    })
    .catch(() => {
      const div = document.createElement('div');

      div.className = 'message error-message';
      div.textContent = 'Promise was rejected!';
      document.body.appendChild(div);
    });

  // promise2 — rejected after 3 seconds
  // do not use resolve in arguments - so "_"
  // eslint-disable-next-line promise/param-names
  const promise2 = new Promise((_, reject) => {
    setTimeout(() => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject();
    }, 3000);
  });

  promise2
    .then(() => {
      const div = document.createElement('div');

      div.className = 'message';
      div.textContent = 'Promise was resolved!';
      document.body.appendChild(div);
    })
    .catch(() => {
      const div = document.createElement('div');

      div.className = 'message error-message';
      div.textContent = 'Promise was rejected!';
      document.body.appendChild(div);
    });
});
