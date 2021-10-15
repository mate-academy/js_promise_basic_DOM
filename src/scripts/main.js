'use strict';

const logo = document.querySelector('.logo');

const notify = (type, text) => {
  const message = `
    <div class="message ${type}">
      ${text}
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', message);
};

const logoPromise = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve({
      type: '', text: 'Promise was resolved!',
    });
  });
});

logoPromise.then(({ type, text }) => notify(type, text));

setTimeout(() => {
  Promise.reject(new Error('Promise was rejected!'))
    .catch(error => notify('error-message', error));
}, 3000);
