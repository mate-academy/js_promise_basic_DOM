'use strict';

const logo = document.querySelector('.logo');
const divError = `
  <div class="error-message">
    Promise was rejected!
  </div>
`;
const divSuccess = `
  <div class="message">
    Promise was resolved!
  </div>
  `;

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    console.log(Promise.resolve());
    return resolve();
  })
})
  .then(result => {
    document.body.insertAdjacentHTML("beforeend", divSuccess)
})
  .catch(() => {
    document.body.insertAdjacentHTML("beforeend", divError)
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return reject();
  }, 3000)
})
.then(() => {
  document.body.insertAdjacentHTML("beforeend", divSuccess)
})
.catch(() => {
  document.body.insertAdjacentHTML("beforeend", divError)
});
