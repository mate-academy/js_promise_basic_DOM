'use strict';

let div;
const logo = document.querySelector('logo');
const promise1 = new Promise(function(resolve, reject) {
  logo.addEventListener('click', () => {
    resolve(`Promise was resolved!`);
  });
});

promise1.then(resolution => {
  div = document.createElement('div');
  div.classList.add('message');
  div.textContent = resolution;
  document.body.append(div);
}).catch(Error('error!'));

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error(`Promise was rejected!`)), 3000);
});

promise2.then(() => {
  return 'Succes';
})
  .catch(rejection => {
    div = document.createElement('div');
    div.classList.add('error-message');
    div.textContent = rejection;
    document.body.append(div);
  });
