'use strict';

const promise1 = new Promise((resolve) => {
  const logoClick = document.querySelector('.logo');

  logoClick.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timeout'));
  }, 3000);
});

promise1
  .then(() => {
    const divB = document.createElement('div');

    divB.classList.add('message');
    divB.textContent = 'Promise was resolved!';

    document.body.appendChild(divB);
  })
  .catch(() => {
    const divB = document.createElement('div');

    divB.classList.add('message', 'error-message');
    divB.textContent = 'Promise was rejected!';

    document.body.appendChild(divB);
  });

promise2
  .then(() => {
    const divB = document.createElement('div');

    divB.classList.add('message');
    divB.textContent = 'Promise was resolved!';

    document.body.appendChild(divB);
  })
  .catch(() => {
    const divB = document.createElement('div');

    divB.classList.add('message', 'error-message');
    divB.textContent = 'Promise was rejected!';

    document.body.appendChild(divB);
  });
