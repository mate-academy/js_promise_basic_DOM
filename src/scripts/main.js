'use strict';

const resolver1 = (resolve) => {
  const logoForClick = document.querySelector('.logo');

  logoForClick.addEventListener('click', () => {
    return resolve('resolved');
  });
};

const resolver2 = (resolve, reject) => {
  setTimeout(() => {
    return reject('rejected');
  }, 3000);
};

const promise1 = new Promise(resolver1);

const promise2 = new Promise(resolver2);

promise1.then(result => makeDom(result));

promise2.catch(result => makeDom(result));

function makeDom(eventType) {
  const notification = document.createElement('div');
  const pageBody = document.querySelector('body');

  switch (eventType) {
    case 'resolved':
      notification.classList.add('message');
      notification.innerHTML = 'Promise was resolved!';
      break;

    case 'rejected':
      notification.classList.add('message', 'error-message');
      notification.innerHTML = 'Promise was rejected!';
      break;
  }

  pageBody.append(notification);
}
