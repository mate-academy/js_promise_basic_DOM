'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.getElementsByClassName('logo')[0];

  if (logo) {
    logo.addEventListener('click', e => {
      e.stopPropagation();
      resolve('Promise was resolved!');
    });
  };

  document.addEventListener('click', (e) => {
    reject(new Error('Promise was rejected!'));
  });
});

promise1
  .then((result) => {
    const newDiv = document.createElement('DIV');

    newDiv.classList.add('message');
    newDiv.innerHTML = result;
    document.body.appendChild(newDiv);
  })
  .catch((error) => {
    const newDiv = document.createElement('DIV');

    newDiv.classList.add('message', 'error-message');
    newDiv.innerHTML = error;
    document.body.appendChild(newDiv);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);

});

promise2
  .then((result) => {
    const newDiv = document.createElement('DIV');

    newDiv.classList.add('message');
    newDiv.innerHTML = result;
    document.body.appendChild(newDiv);
  })
  .catch((error) => {
    const newDiv = document.createElement('DIV');

    newDiv.classList.add('message', 'error-message');
    newDiv.innerHTML = error;
    document.body.appendChild(newDiv);
  });
