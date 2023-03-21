'use strict';

const logoButton = document.querySelector('.logo');

function createPromise() {
  const result = (resolve, reject) => {
    logoButton.addEventListener('click', (e) => {
      resolve(logoButton);
    });

    setTimeout(() => {
      reject();
    }, 3000);
  };

  return new Promise(result);
}

const promise1 = createPromise();

promise1
  .then(successOne, failOne);

function successOne(result) {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  logoButton.after(div);
};

function failOne() {
  const div = document.createElement('div');

  div.classList.add('error-message');
  div.textContent = 'Promise was rejected!';
  logoButton.after(div);
};
