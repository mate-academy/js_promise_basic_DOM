'use strict';

const div = document.createElement('DIV');

function waitFor() {
  const logo = document.querySelector('.logo');
  const resolver = (complete) => {
    logo.addEventListener('click', (e) => {
      if (e.target.closest('.logo')) {
        complete();
      }
    });
  };

  return new Promise(resolver);
}

function reject() {
  promise2
    .then(() => {
      setTimeout(() => {
        div.classList.remove('message');
        div.classList.add('error-message');
        div.textContent = 'Promise was resolved!';
        document.body.append(div);
      }, 3000);
    });
}

const promise1 = waitFor();
const promise2 = waitFor();

promise1
  .then(() => {
    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    document.body.append(div);
  })
  .then(reject);
