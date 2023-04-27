'use strict';

const logoButton = document.querySelector('.logo');

function newMessage(text, result) {
  const div = document.createElement('div');

  div.classList.add(result);
  div.textContent = text;
  logoButton.after(div);
};

function firstPromise() {
  const result1 = (resolve, reject) => {
    logoButton.addEventListener('click', (e) => {
      resolve('Promise was resolved!');
    });
  };

  return new Promise(result1);
}

function secondPromise() {
  const result2 = (resolve, reject) => {
    setTimeout(() => {
      reject('Promise was rejected!');
    }, 3000);
  };

  return new Promise(result2);
}

const promise1 = firstPromise();
const promise2 = secondPromise();

promise1
  .then((message1) => newMessage(message1, 'message'))
  .catch();

promise2
  .then()
  .catch((message2) => newMessage(message2, 'error-message'));

//
