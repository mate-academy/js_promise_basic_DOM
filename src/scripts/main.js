'use strict';
const logo = document.querySelector('.logo')

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  })
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timeout exceeded'))
  }, 3000);
});

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);

function handleSuccess() {
  const cont = document.createElement('div');
  cont.classList.add('message');
  cont.textContent = 'Promise was resolved!';
  document.querySelector('body').append(cont);
};

function handleError() {
  const cont = document.createElement('div');
  cont.classList.add('message', 'error-message');
  cont.textContent = 'Promise was rejected!';
  document.querySelector('body').append(cont);
}
