'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');

  const promise1 = new Promise((resolve) => {
    if (logo) {
      logo.addEventListener(
        'click',
        () => {
          resolve();
        },
        { once: true },
      );
    }
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Timeout'));
    }, 3000);
  });

  const onSuccess = () => {
    const div = document.createElement('div');

    div.className = 'message';
    div.textContent = 'Promise was resolved!';
    document.body.appendChild(div);
  };

  const onError = () => {
    const div = document.createElement('div');

    div.className = 'message error-message';
    div.textContent = 'Promise was rejected!';
    document.body.appendChild(div);
  };

  promise1.then(onSuccess).catch(onError);
  promise2.then(onSuccess).catch(onError);
});
