'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('error')), 3000);
});

const succesMessage = () => {
  const elementDiv = document.createElement('div');

  elementDiv.className = 'message';
  elementDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(elementDiv);
};

const errorMessage = () => {
  const elementDiv = document.createElement('div');

  elementDiv.className = 'message error-message';
  elementDiv.textContent = 'Promise was rejected!';
  document.body.appendChild(elementDiv);
};

promise1.then(succesMessage).catch(errorMessage);
promise2.then(succesMessage).catch(errorMessage);
