'use strict';

const promise1 = new Promise((resolved, rejected) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', function() {
    resolved('Promise was resolved!');
  });
});

const promise2 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    rejected('Promise was rejected');
  }, 3000);
});

promise1.then((message) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  document.body.appendChild(div);
}).catch((err) => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = err;
  document.body.appendChild(div);
});

promise2.then((message) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  document.body.appendChild(div);
}).catch((err) => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = err;
  document.body.appendChild(div);
});
