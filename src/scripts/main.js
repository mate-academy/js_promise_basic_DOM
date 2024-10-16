'use strict';

const body = document.body;
const logo = document.querySelector('.logo');

async function handlePromise(promise) {
  try {
    await promise;

    body.insertAdjacentHTML(
      'beforeend',
      `
      <div class="message">
        Promise was resolved!
      </div>
    `,
    );
  } catch {
    body.insertAdjacentHTML(
      'beforeend',
      `
      <div class="message error-message">
        Promise was rejected!
      </div>
    `,
    );
  }
}

const p1 = new Promise((resolve) => {
  logo.addEventListener('click', resolve);
});

handlePromise(p1);

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const err = new Error('something went wrong...');

    reject(err);
  }, 3000);
});

handlePromise(p2);
