'use strict';

// write your code here
const getLogo = document.querySelector('.logo');
const createDiv = document.createElement('div');

createDiv.classList.add('message');

const promise1 = new Promise((resolve) => {
  getLogo.addEventListener('click', () => {
    if (resolve) {
      resolve('Promise was resolved!');
    }
  });
});

const promise2 = new Promise((resolve, reject) => {
  if (reject) {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  }
});

promise1
  .then((data) => {
    createDiv.textContent = data;
    document.body.append(createDiv);
  })
  // eslint-disable-next-line handle-callback-err
  .catch((error) => {
    // console.log(error);
  });

promise2
  .then((data) => {
    // console.log(data);
  })
  .catch((error) => {
    createDiv.classList.add('error-message');
    createDiv.textContent = error;
    document.body.append(createDiv);
  });
