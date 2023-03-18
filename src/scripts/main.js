'use strict';

const logo = document.getElementById('logo');

function boxes(order) {
  const box1 = document.createElement('div');

  document.body.appendChild(box1);
  box1.textContent = `${order}`;

  box1.className += 'error-message';

  order.split(' ').includes('resolved!')
    ? box1.className = 'message'
    : box1.className = 'error-message';
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
    reject(new Error('Promise was rejected!'));
  });
});

promise1.then((message) => {
  boxes(message);
}).catch((message) => {
  boxes(message);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.then((message) => {
  boxes(message);
}).catch((message) => {
  boxes(message);
});
