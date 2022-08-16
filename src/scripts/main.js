'use strict';

const toProcess = (promise, element) => {
  promise
    .then(success => {
      element.classList.add('message');
      element.textContent = success;
    })
    .catch(error => {
      element.classList.add('message', 'error-message');
      element.textContent = error;
    });
};

const body = document.getElementsByTagName('body');
const logo = document.getElementsByClassName('logo');

const child1 = document.createElement('div');
const child2 = document.createElement('div');

const promise1 = new Promise(resolve => {
  logo[0].addEventListener('click', () => resolve('Promise was resolved!'));
});

toProcess(promise1, child1);

setTimeout(() => {
  const promise2 = Promise.reject('Promise was rejected!');

  toProcess(promise2, child2);
}, 3000);

body[0].append(child1, child2);
