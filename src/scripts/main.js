'use strict';

const logo = document.querySelector('.logo');

function notification(className, text) {
  return `
  <div class="className">
    ${text}
  </div>`
}

const divError = notification('error-message', 'Promise was rejected!');
const divSuccess = notification('message', 'Promise was resolved!');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    return resolve();
  });
})
  .then(result => {
    document.body.insertAdjacentHTML("beforeend", divSuccess)
})
  .catch(() => {
    document.body.insertAdjacentHTML("beforeend", divError)
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
})
  .then(() => {
    document.body.insertAdjacentHTML("beforeend", divSuccess)
  })
  .catch(() => {
    document.body.insertAdjacentHTML("beforeend", divError)
  });
