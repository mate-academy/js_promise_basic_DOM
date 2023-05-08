'use strict';

const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(
       '<div class="message"> Promise was resolved! </div>'
    );
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(
      '<div class="message error-message"> Promise was rejected! </div>')
    }, 3000);
});


promise1.then(data => insertAdjacentHTMLBeforeend(data));
promise2.catch(error => insertAdjacentHTMLBeforeend(error));

function insertAdjacentHTMLBeforeend(string) {
  document.body.insertAdjacentHTML('beforeend',
  string)
;
}