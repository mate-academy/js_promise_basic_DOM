'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', function() {
    resolve();
  });

  document.body.addEventListener('click', function() {
    reject(new Error('error'));
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error'));
  }, 3000);
});

function myFunction() {
  const divToAdd = document.createElement('div');

  divToAdd.innerText = 'Promise was resolved!';

  divToAdd.classList.add('message');

  document.body.append(divToAdd);
};

function myFunctionShowError() {
  const errDiv = document.createElement('div');

  errDiv.innerText = 'Promise was rejected!';

  errDiv.classList.add('error-message');

  document.body.append(errDiv);
};

promise1
  .then(() => {
    myFunction();
  })
  .catch(() => {
    myFunctionShowError();
  });

promise2
  .then(() => {
    myFunction();
  })
  .catch(() => {
    myFunctionShowError();
  });
