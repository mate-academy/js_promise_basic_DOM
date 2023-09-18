'use strict';

const body = document.body;
const logo = body.querySelector('.logo');
const promiseStateValues = {
  Success: 'Success',
  Error: 'Error',
};

const createDiv = (state) => {
  const div = document.createElement('div');

  div.classList.add('message');

  switch (state) {
    case promiseStateValues.Success:
      div.textContent = 'Promise was resolved!';
      break;

    case promiseStateValues.Error:
      div.classList.add('error-message');
      div.textContent = 'Promise was rejected!';
      break;
  }

  return div;
};

const successHandler = (elem) => {
  elem.append(createDiv(promiseStateValues.Success));
};

const errorHandler = (elem) => {
  elem.append(createDiv(promiseStateValues.Error));
};

const firstPromise = new Promise((resolve) => {
  logo.addEventListener('click', () => resolve());
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

firstPromise.then(() => successHandler(body));
secondPromise.catch(() => errorHandler(body));
