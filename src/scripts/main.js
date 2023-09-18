'use strict';

const body = document.body;
const logo = body.querySelector('.logo');

const createDiv = (state) => {
  const div = document.createElement('div');

  div.classList.add('message');

  switch (state) {
    case 'Success':
      div.textContent = 'Promise was resolved!';
      break;

    case 'Error':
      div.classList.add('error-message');
      div.textContent = 'Promise was rejected!';
      break;
  }

  return div;
};

const successHandler = (elem) => {
  elem.append(createDiv('Success'));
};

const errorHandler = (elem) => {
  elem.append(createDiv('Error'));
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise1.then(() => successHandler(body));
promise2.catch(() => errorHandler(body));
