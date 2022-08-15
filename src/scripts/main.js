'use strict';

const element = document.getElementsByClassName('logo');

const child1 = document.createElement('div');
const child2 = document.createElement('div');

const promise1 = new Promise((resolve) => {
  element[0].addEventListener('click', () => resolve('Promise was resolved!'));
});

promise1
  .then(success => {
    child1.classList.add('message');
    child1.textContent = success;
  })
  .catch(error => {
    child1.classList.add('message', 'error-message');
    child1.textContent = error;
  });

setTimeout(() => {
  const promise2 = Promise.reject('Promise was rejected!');

  promise2
    .then(success => {
      child2.classList.add('message');
      child2.textContent = success;
    })
    .catch(error => {
      child2.classList.add('message', 'error-message');
      child2.textContent = error;
    });
}, 3000);

element[0].append(child1, child2);
