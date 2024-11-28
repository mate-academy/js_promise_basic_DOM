'use strict';

// write your code here
const promise1 = new Promise((resolve, reject) => {
  // додаю обробник кліку на елемент з класом лого
  const logoElement = document.querySelector('.logo');

  if (logoElement) {
    logoElement.addEventListener('click', () => {
      resolve('First promise was resolved');
    });
  } else {
    reject(new Error('First promise not was resolved'));
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('First promise was rejected'));
  }, 3000);
});

promise1
  .then((message) => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = message;

    document.body.appendChild(div);
  })
  .catch((error) => {
    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.textContent = error;

    document.body.appendChild(div);
  });

promise2.catch((error) => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = error;

  document.body.appendChild(div);
});
