'use strict';

const promise = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', function() {
    resolve();
  });

  setTimeout(() => reject(new Error('promise was rejected')), 3000);
});

promise.then(() => {
  const div = document.createElement('div');

  div.className = 'message';
  div.innerText = 'Promise was resolved!';
  document.body.append(div);
});

promise.catch(() => {
  const div = document.createElement('div');

  div.className = 'error-message';
  div.innerText = 'Promise was rejected!';
  document.body.append(div);
});
