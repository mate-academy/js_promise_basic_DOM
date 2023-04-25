'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function onSuccess() {
  body.insertAdjacentHTML("beforeend", `
      <div class="message">Promise was resolved!</div>
    `)
}

function onError() {
  body.insertAdjacentHTML('beforeend', `
    <div class="message error-message">Promise was rejected!</div>
  `);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve(onSuccess)
  })
})


const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(onError);
  }, "3000")
})

promise1
  .then(onSuccess)
  .catch(onError)

promise2
  .then(onSuccess)
  .catch(onError)
