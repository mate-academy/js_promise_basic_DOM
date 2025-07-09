'use strict';

const logoElement = document.querySelector('.logo');
const message = 'Promise was resolved!';
const errMessage = 'Promise was rejected!';

function showResult(text, isError = false) {
  const creatElementDiv = document.createElement('div');

  creatElementDiv.classList.add('message');

  if (isError) {
    creatElementDiv.classList.add('error-message');
  }

  creatElementDiv.textContent = text;
  document.body.append(creatElementDiv);
}

const promise1 = new Promise((resolve) => {
  logoElement.addEventListener(
    'click',
    () => {
      resolve(message);
    },
    { once: true },
  );
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(errMessage);
  }, 3000);
});

promise1.then((msg) => showResult(msg)).catch((err) => showResult(err, true));

promise2.then((msg) => showResult(msg)).catch((err) => showResult(err, false));
