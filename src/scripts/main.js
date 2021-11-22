'use strict';

function printMessage(result) {
  const div = document.createElement('div');

  div.classList.add(result[0]);
  div.innerText = result[1];

  document.body.append(div);
}

const promise1 = new Promise(resolve => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve(['message', 'Promise was resolved!']);
  });
});

const promise2 = new Promise((resolve, reject) => {
  const failure = ['error-message', 'Promise was rejected!'];

  setTimeout(() => reject(failure), 3000);
});

promise1
  .then(printMessage)
  .catch(printMessage);

promise2.catch(printMessage);
