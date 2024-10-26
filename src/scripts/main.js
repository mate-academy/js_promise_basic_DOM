'use strict';

const WAIT = 3000;
const LOGO_EVENT = 'click';

const logo = document.querySelector('.logo');
const elemDone = document.createElement('div');

elemDone.classList.add('message');

const elemDeny = elemDone.cloneNode(true);

elemDeny.classList.add('error-message');

elemDone.textContent = 'Promise was resolved!';
elemDeny.textContent = 'Promise was rejected!';

const promise1 = new Promise((resolve) => {
  logo.addEventListener(LOGO_EVENT, () => {
    resolve();
  });
});

promise1.then(() => {
  logo.after(elemDone);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, WAIT);
});

promise2.catch(() => logo.after(elemDeny));
