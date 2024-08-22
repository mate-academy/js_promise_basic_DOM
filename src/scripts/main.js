'use strict';

function createDiv() {
  const div = document.createElement('div');

  return div;
}

function createPositiveMessage(element) {
  element.classList.add('message');
  element.textContent = 'Promise was resolved!';
  document.body.appendChild(element);
}

function createNegativeMessage(element, message) {
  element.classList.add('message', 'error-message');
  element.textContent = message;
  document.body.appendChild(element);
}

const p1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

p1.then(() => {
  const div = createDiv();

  createPositiveMessage(div);
}).catch((error) => {
  const div = createDiv();

  createNegativeMessage(div, error.message);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 2000);
});

p2.catch((error) => {
  const div = createDiv();

  createNegativeMessage(div, error.message);
});
