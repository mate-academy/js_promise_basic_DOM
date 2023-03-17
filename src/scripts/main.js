'use strict';

const logo = document.getElementById('logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
    reject(new Error('Promise was rejected!'));
  });
});

promise1.then(() => {
  const box1 = document.createElement('div');

  document.body.appendChild(box1);
  box1.className += 'message';
  box1.textContent += 'Promise was resolved!';
});

promise1.catch(() => {
  const box2 = document.createElement('div');

  document.body.appendChild(box2);
  box2.className += 'eror-message';
  box2.textContent += 'Promise was rejected!!';
});

const promise2 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });

  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.then(() => {
  const box1 = document.createElement('div');

  document.body.appendChild(box1);
  box1.className += 'message';
  box1.textContent += 'Promise was resolved!';
});

promise2.catch(() => {
  const box2 = document.createElement('div');

  document.body.appendChild(box2);
  box2.className += 'eror-message';
  box2.textContent += 'Promise was rejected!';
});
