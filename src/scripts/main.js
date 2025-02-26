'use strict';
/* eslint-disable */

const logo = document.querySelector('.logo');

if (logo) {
  const promise1 = new Promise((resolve) => {
    logo.addEventListener('click', () => {
      resolve();
    });
  });

  promise1.then(() => {
    const div = document.createElement('div');
    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    document.body.appendChild(div);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Something went wrong after 3 seconds'));
    }, 3000);
  });

  promise2.catch((error) => {
    console.error('Promise was rejected:', error);
    const div = document.createElement('div');
    div.classList.add('message', 'error-message');
    div.textContent = 'Promise was rejected!';
    document.body.appendChild(div);
  });
} else {
  console.error('Logo element not found in the DOM');
}
