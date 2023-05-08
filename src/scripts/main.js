'use strict';

const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(
      insertAdjacentHTMLBeforeend( '<div class="message"> Promise was resolved! </div>')
    );
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(
      insertAdjacentHTMLBeforeend( '<div class="message error-message"> Promise was rejected! </div>')
    )
    }, 3000);
});

// eslint-disable-next-line no-console
promise1.then(data => insertAdjacentHTML(data));
// eslint-disable-next-line no-console
promise2.catch(error =>  insertAdjacentHTML(error));

function insertAdjacentHTMLBeforeend(string) {
  document.body.insertAdjacentHTML('beforeend',
  string)
;
}