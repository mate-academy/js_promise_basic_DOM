'use strict';

const body = document.body;

const firstPromise = new Promise(resolve => {
  const logo = body.querySelector('.logo');

  logo.addEventListener('click', () => {
    const message = `
      <div class="message">
        <p>Promise was resolved!</p>
      </div>
    `;

    resolve(message);
  });
});

const secondPromise = new Promise((resolve, reject) => {
  const errorMessage = `
    <div class="message error-message">
      <p>Promise was rejected!</p>
    </div>
  `;

  setTimeout(() => reject(errorMessage), 3000);
});

firstPromise.then(result => {
  body.insertAdjacentHTML('beforeend', result);
});

secondPromise.catch(error => {
  body.insertAdjacentHTML('beforeend', error);
});
