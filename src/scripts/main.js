'use strict';

const logoElement = document.querySelector('.logo');

const successMessageElement = document.createElement('div');
const errorMessageElement = document.createElement('div');

successMessageElement.className = 'message';
errorMessageElement.className = 'error-message';
successMessageElement.textContent = 'Promise was resolved!';
errorMessageElement.textContent = 'Promise was rejected!';

const successPromise = new Promise(resolve => {
  logoElement.addEventListener('click', resolve);
});

const errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

successPromise.then(
  () => document.body.append(successMessageElement)
);

errorPromise.catch(
  () => document.body.append(errorMessageElement)
);
