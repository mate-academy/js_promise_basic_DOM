'use strict';

const body = document.body;
const logo = document.querySelector('.logo');

function promise1() {
  return new Promise((resolve, reject) => {
    resolve(() => {
      const newDiv = document.createElement('div');

      newDiv.setAttribute('class', 'message');
      newDiv.innerText = 'Promise was resolved!';

      return newDiv;
    });
  });
}

function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error());
    }, 3000);
  });
}

logo.addEventListener('click', () => {
  promise1().then((addDiv) => {
    body.append(addDiv());
  });
});

promise2()
  .then((addDiv) => {
    body.append(addDiv());
  })
  .catch(() => {
    const newDiv = document.createElement('div');

    newDiv.setAttribute('class', 'message error-message');
    newDiv.innerText = 'Promise was rejected!';
    body.append(newDiv);
  });
