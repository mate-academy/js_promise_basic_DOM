'use strict';

const logo = document.querySelector('.logo');

const firstPromise = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve('Promise 1 resolved'));
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise 1 rejected'));
  }, 3000);
});

function addNotificationsSuccess() {
  const notificationSuccess = document.createElement('div');

  notificationSuccess.classList.add('.message');
  notificationSuccess.textContent = 'Promise was resolved';
  document.appendChild(notificationSuccess);
}

function addNotificationsFailure() {
  const notificationFailure = document.createElement('div');

  notificationFailure.classList.add('.message', 'error-message');
  notificationFailure.textContent = 'Promise was rejected';
  document.appendChild(notificationFailure);
}

firstPromise.then(addNotificationsSuccess).catch(addNotificationsFailure);
secondPromise.then(addNotificationsSuccess);
