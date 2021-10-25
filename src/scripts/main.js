'use strict';

const insert = (text, class1, class2) => {
  const message = document.createElement('div');

  message.classList.add(class1, class2);
  message.innerHTML = text;
  document.body.append(message);
};

const firstPromise = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    insert('Promise was resolved!', 'message');
    resolve('Resolve');
  });
});

// eslint-disable-next-line
firstPromise.then(info => {console.log(info)});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    insert('Promise was rejected!', 'message', 'error-message');

    const errorMessage = document.querySelector('.error-message');

    setTimeout(() => errorMessage.remove(), 2000);
    reject(new Error('Reject'));
  }, 3000);
});

// eslint-disable-next-line
secondPromise.catch(error => {console.log(error)});
