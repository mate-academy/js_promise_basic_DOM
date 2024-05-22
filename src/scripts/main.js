'use strict';

const logo = document.getElementById('logo');
const promise1 = new Promise(function (resolve, reject) {
  // eslint-disable-next-line no-shadow
  logo.addEventListener('click', function (event) {
    if (event.button === 0) {
      resolve();
    }
  });
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

const generateSuccessMessage = () => {
  document.body.insertAdjacentHTML(
    'beforeend',
    `
      <div class="message">
        Promise was resolved!
      </div>
    `,
  );
};

const generateErrorMessage = () => {
  document.body.insertAdjacentHTML(
    'beforeend',
    `
        <div class="message error-message">
          Promise was rejected!
        </div>
      `,
  );
};

promise1.then(generateSuccessMessage);
promise2.catch(generateErrorMessage);
