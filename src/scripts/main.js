'use strict';

const body = document.querySelector('body');
const logoMA = document.querySelector('h1');

const successDiv = document.createElement('div');
const successText = document.createTextNode('Promise was resolved!');
successDiv.appendChild(successText);
successDiv.classList.add('message');

const errorDiv = document.createElement('div');
const errorText = document.createTextNode('Promise was rejected!');
errorDiv.appendChild(errorText);
errorDiv.classList.add('message','error-message');

const promise1 = new Promise((resolve, reject) => {
  logoMA.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise regected!!!'))
  }, 3000)
})

promise1.then(() => {
  body.appendChild(successDiv);
});

promise2.catch(() => {
  body.appendChild(errorDiv);
});
