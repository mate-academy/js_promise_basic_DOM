'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('h1');

  logo.addEventListener('click', () => {
    const div = document.createElement('div');

    div.textContent = `Promise was resolved!`;
    div.classList.add('message');
    document.body.append(div);
    resolve(div);
  });
});

promise1.then(() => {
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const divEl = document.createElement('div');

      divEl.textContent = `Promise was rejected!`;
      divEl.classList.add('error-message');
      reject(divEl);
    }, 3000);
  });

  promise2.catch(data => {
    document.body.append(data);
  });
});
