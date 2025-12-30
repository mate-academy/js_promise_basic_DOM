'use strict';

const body = document.querySelector('body');

const successHandler = () => {
  const div = document.createElement('div');
  const p = document.createElement('p');

  div.classList.add('message');

  p.innerText = 'Promise was resolved!';

  div.appendChild(p);

  body.appendChild(div);
};

const errorHandler = () => {
  const div = document.createElement('div');
  const p = document.createElement('p');

  div.classList.add('message');
  div.classList.add('error-message');

  p.innerText = 'Promise was rejected!';

  div.appendChild(p);

  body.appendChild(div);
};

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (!logo) {
    reject(new Error('logo not found'));

    return;
  }

  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(successHandler).catch(errorHandler);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('timeout'));
  }, 3000);
});

promise2.then(successHandler).catch(errorHandler);
