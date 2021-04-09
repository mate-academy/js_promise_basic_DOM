'use strict';

const firstPromise = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    const messageResolved = document.createElement('div');

    messageResolved.setAttribute('class', `message`);
    messageResolved.innerHTML = 'Promise was resolved!';
    document.body.append(messageResolved);

    resolve('Resolve');
  });
});

// eslint-disable-next-line
firstPromise.then(info => {console.log(info)});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const meassageRejected = document.createElement('div');

    meassageRejected.classList.add('message', 'error-message');
    meassageRejected.innerHTML = 'Promise was rejected!';
    document.body.append(meassageRejected);

    setTimeout(() => meassageRejected.remove(), 2000);

    reject(new Error('Reject'));
  }, 3000);
});

// eslint-disable-next-line
secondPromise.catch(error => {console.log(error)});
