'use strict';

const logo = document.querySelector('.logo');

function createPromise1() {
  return new Promise((resolve, reject) => {
    resolve('Promise was resolved!');
  });
}

logo.addEventListener('click', async () => {
  try {
    const promise1 = await createPromise1();

    const division = document.createElement('div');

    division.classList.add('message');
    division.textContent = promise1;
    document.body.appendChild(division);
  } catch (error) {
    const division = document.createElement('div');

    division.classList.add('message', 
      'error-message');
    division.textContent = error.message;
    document.body.appendChild(division);
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.then((result) => {
  const division = document.createElement('div');

  division.classList.add('message');
  division.textContent = result;
  document.body.appendChild(division);
});

promise2.catch((error) => {
  const division = document.createElement('div');

  division.classList.add('message', 'error-message');
  division.textContent = error.message;
  document.body.appendChild(division);
});
