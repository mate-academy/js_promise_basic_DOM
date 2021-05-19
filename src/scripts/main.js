'use strict';

// write your code here
const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const p1 = new Promise((resolve) => {
  logo.addEventListener('mousedown', (e) => {
    if (e.button === 2) {
      return;
    }
    resolve('message');
  });
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('message error-message');
  }, 3000);
});

const getNotification = (newClass) => {
  const newNotification = document.createElement('div');

  newNotification.className = newClass;

  if (newClass === 'message') {
    newNotification.textContent = 'Promise was resolved!';
  } else {
    newNotification.textContent = 'Promise was rejected!';
  };

  body.append(newNotification);

  setTimeout(() => {
    newNotification.hidden = true;
  }, 1000);
};

p1.then(result => getNotification(result));
p2.catch(result => getNotification(result));
