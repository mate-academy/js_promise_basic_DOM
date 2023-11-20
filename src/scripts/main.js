'use strict';

// write your code here
const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

const addMessage = () => {
  const succesDiv = document.createElement('div');

  succesDiv.className = 'message';
  succesDiv.innerText = 'Promise was resolved!';
  body.appendChild(succesDiv);
};

const addBadMessage = () => {
  const succesDiv = document.createElement('div');

  succesDiv.className = 'message error-message';
  succesDiv.innerText = 'Promise was rejected!';
  body.appendChild(succesDiv);
};

promise1
  .then(addMessage)
  .catch(addBadMessage);

promise2
  .then(addMessage)
  .catch(addBadMessage);
