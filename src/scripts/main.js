'use strict';

const logo = document.querySelector('.logo');
const div1 = document.createElement('div');
const div2 = document.createElement('div');

logo.append(div1);
logo.append(div2);

logo.addEventListener('click', () => {
  const promise1 = Promise.resolve();

  promise1
    .then(
      div1.className = 'message',
      div1.innerHTML = 'Promise was resolved!'
    );
});

setTimeout(() => {
  const promise2 = Promise.reject(new Error('Promise was rejected!'));

  promise2
    .catch(
      div2.className = 'message error-message',
      div2.innerHTML = 'Promise was rejected!'
    );
}, 3000);
