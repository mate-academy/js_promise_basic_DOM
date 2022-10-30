'use strict';

const body = document.querySelector('body');

const promise1 = new Promise(resolver1);

function resolver1(complete, eror) {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    complete();
  });
}

const promise2 = new Promise(resolver2);

function resolver2(complete, eror) {
  setTimeout(eror, 3000);
};

promise1.then(() => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.innerText = 'Promise was resolved!';

  body.append(message);
});

promise2.catch(() => {
  const message = document.createElement('div');

  message.classList.add('error-message');
  message.innerText = 'Promise was rejected!';

  body.append(message);
});
