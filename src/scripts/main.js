'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const promise1 = new Promise((resolve, reject) => {
    const x = document.querySelector('.logo');

    if (!x) {
      reject('Элемент с классом .logo не найден');

      return;
    }

    x.addEventListener(
      'click',
      () => {
        resolve('Promise was resolved!');
      },
      { once: true },
    );
  });

  promise1
    .then((c) => {
      // console.log(c);
      const createEl = document.createElement('div');

      createEl.classList.add('message');
      createEl.innerHTML = c;
      document.body.appendChild(createEl);
      // console.log('gg');
    })
    .catch(() => {
      const createElError = document.createElement('div');

      createElError.classList.add('message');
      createElError.classList.add('error-message');

      createElError.innerHTML = 'Promise was rejected!';
      document.body.appendChild(createElError);
      // console.log('error');
    });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Promise was rejected!');
    }, 3000);
  });

  promise2
    .then(() => {
      const createEl = document.createElement('div');

      createEl.classList.add('message');
      createEl.innerHTML = 'Promise was resolved!';
      document.body.appendChild(createEl);
      // console.log('gg');
    })
    .catch((a) => {
      // console.log('ff');
      // console.log(a);

      const createElError = document.createElement('div');

      createElError.classList.add('message');
      createElError.classList.add('error-message');

      createElError.innerHTML = a;
      document.body.appendChild(createElError);
      // console.log('error');
    });
});
