'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1.then(() => {
  createDiv('Promise was resolved!', false);
});

promise1.catch(() => {
  createDiv('Promise was rejected!', true);
});

promise2.then(() => {
  createDiv('Promise was resolved!', false);
});

promise2.catch(() => {
  createDiv('Promise was rejected!', true);
});

function createDiv(str, isError) {
  const div = document.createElement('div');
  const text = document.createElement('p');

  div.classList.add('message');

  if (isError) {
    div.classList.add('error-message');
  }

  text.textContent = str;
  div.append(text);

  document.body.append(div);
}
