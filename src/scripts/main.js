'use strict';

const body = document.querySelector('body');
const succesMessage = document.createElement('div');
const errorMessage = document.createElement('div');
const logo = document.querySelector('.logo');
const pS = document.createElement('p');
const pE = document.createElement('p');

succesMessage.appendChild(pS);
errorMessage.appendChild(pE);
pS.textContent = 'Promise was resolved!';
pE.textContent = 'Promise was rejected!';
succesMessage.classList.add('message');
errorMessage.classList.add('message');
errorMessage.classList.add('error-message');

function resolved() {
  body.appendChild(succesMessage);
}

function rejected() {
  body.appendChild(errorMessage);
}

const promise1 = new Promise(function (resolve, reject) {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

promise2.then(resolved).catch(rejected);
promise1.then(resolved).catch(rejected);
