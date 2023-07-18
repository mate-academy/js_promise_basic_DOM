'use strict';

const resolveMessage = `
  <div class="message">
    Promise was resolved!
  </div>
`;
const rejectMessage = `
  <div class="message error-message">
    Promise was rejected!
  </div>
`;
const body = document.getElementById('body');

const createPromise = () => {
  const logo = document.querySelector('.logo');

  const resolver = (resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve(resolveMessage);
    });

    setTimeout(() => {
      reject(rejectMessage);
    }, 3000);
  };

  return new Promise(resolver);
};

const promise1 = createPromise();
const promise2 = createPromise();

promise1
  .then(res => {
    body.innerHTML += res;
  })
  .catch(err => {
    body.innerHTML += err;
  });

promise2
  .then(res => {
    body.innerHTML += res;
  })
  .catch(err => {
    body.innerHTML += err;
  });
