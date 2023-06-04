'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

const succesMessage = document.createElement('div');
const errorMessage = document.createElement('div');

succesMessage.innerHTML
= `<div class="message"> Promise was resolved! </div>`;

errorMessage.innerHTML
= `<div class="message error-message"> Promise was rejected! </div>`;

const resolver1 = (succes, error) => {
  logo.addEventListener('click', () => {
    succes(succesMessage);
  });
};

const resolver2 = (succes, error) => {
  setTimeout(() => {
    error(errorMessage);
  }, 3000);
};

const promise1 = new Promise(resolver1);
const promise2 = new Promise(resolver2);

promise1
  .then(result => {
    body.append(result);
  })
  .catch(result => {
    body.append(result);
  });

promise2
  .then(result => {
    body.append(result);
  })
  .catch(result => {
    body.append(result);
  });
