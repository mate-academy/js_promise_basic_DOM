'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    const div = document.createElement('div');
    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    resolve(div);
  });
});

promise1.then(div => {
  document.body.append(div);
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const div = document.createElement('div');
    div.classList.add('message', 'error-message');
    div.textContent = 'Promise was rejected!';
    reject(div);
  }, 3000);
});

promise2.catch(div => {
  document.body.appendChild(div);
})
