'use strict';

const body = document.getElementById('body');
const logoButton = document.getElementById('logo');

function createPromise1() {
  const resolver = (logo) => {
    logoButton.addEventListener('click', () => {
      logo('success');
    });
  };

  return new Promise(resolver);
}

function createPromise2() {
  const resolver = (resolve, cancel) => {
    setTimeout(() => cancel(new Error()), 3000);
  };

  return new Promise(resolver);
}

const promise1 = createPromise1();
const promise2 = createPromise2();

promise1
  .then((result) => {
    const divLogo = document.createElement('div');
    const resolveText = document.createTextNode('Promise was resolved!');

    divLogo.className = 'message';

    divLogo.appendChild(resolveText);
    body.appendChild(divLogo);
  });

promise2
  .catch((cancel) => {
    const divTimeout = document.createElement('div');
    const rejectText = document.createTextNode('Promise was rejected!');

    divTimeout.className = 'error-message';

    divTimeout.appendChild(rejectText);
    body.appendChild(divTimeout);
  });
