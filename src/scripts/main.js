'use strict';

const logoMate = document.querySelector('.logo');

const prom1 = new Promise((resolve, reject) => {
  logoMate.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

prom1
  .then((respons) => {
    if (respons) {
      const divResolve = document.createElement('div');

      divResolve.innerHTML = respons;
      divResolve.classList.add('message');

      document.body.append(divResolve);
    }
  })
  .catch();

const prom2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, 'Promise was rejected!');
});

prom2.then().catch((error) => {
  const divError = document.createElement('div');

  divError.innerHTML = error;
  divError.classList.add('message', 'error-message');

  document.body.append(divError);
});
