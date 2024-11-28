'use strict';

const logo = document.querySelector('.logo');
const div = document.createElement('div');

div.className = 'message';

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line
    reject();
  }, 3000);
});

promise2.catch(() => {
  div.classList.add('error-message');
  div.textContent = 'Promise was rejected!';

  document.body.append(div);
});

function handleClick() {
  const promise1 = new Promise((resolve) => resolve());

  promise1.then(() => {
    div.textContent = 'Promise was resolved!';

    document.body.append(div);
  });
}

logo.addEventListener('click', handleClick);
