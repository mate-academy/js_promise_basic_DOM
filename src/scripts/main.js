'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1
  .then(() => pushNotif(true))
  .catch(() => {
    pushNotif(false);
  });

promise2
  .then(() => pushNotif(true))
  .catch(() => {
    pushNotif(false);
  });

function pushNotif(isSuccess = true) {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');

  div.classList.add('message');

  if (isSuccess) {
    h1.textContent = 'Promise was resolved!';
  } else {
    h1.textContent = 'Promise was rejected!';
    div.classList.add('error-message');
  }

  div.append(h1);
  document.body.append(div);
}
