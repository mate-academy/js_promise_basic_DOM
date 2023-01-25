'use strict';

const logo = document.body.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('resolve');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('reject'));
  }, 3000);
});

const newDivElement = function(text, class1, class2) {
  const div = document.createElement('div');

  div.classList.add(class1, class2);
  div.textContent = text;
  logo.append(div);
};

const successHandler = function() {
  newDivElement('Promise was resolved!', 'message');
};

const errorHandler = function() {
  newDivElement('Promise was rejected!', 'message', 'error-message');
};

promise1.then(successHandler);
promise2.catch(errorHandler);
