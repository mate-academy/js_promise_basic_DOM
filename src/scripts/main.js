'use strict';

const logo = document.querySelector('.logo');

function promise1() {
  return new Promise((resolve, reject) => {
    const div = document.createElement('div');

    div.className = 'message';
    div.textContent = 'Promise was resolved!';

    logo.addEventListener('click', (e) => {
      if (e.target.classList.contains('logo')) {
        resolve(document.body.appendChild(div));
      } else {
        div.textContent = 'Promise failed';
        reject(document.body.appendChild(div));
      }
    });
  });
}

function promise2() {
  return new Promise((resolve, reject) => {
    const div = document.createElement('div');

    div.className = 'message error-message';
    div.textContent = 'Promise was rejected!';

    setTimeout(() => {
      reject(document.body.appendChild(div));
    }, 3000);
  }).catch(() => {
    const div = document.createElement('div');

    div.className = 'message error-message';
    div.textContent = 'Promise failed';
    document.body.appendChild(div);
  });
}

promise1();
promise2();
