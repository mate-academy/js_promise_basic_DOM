'use strict';
const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', () => resolve());
  } else {
    reject(new Error("Element '.logo' not found"));
  }
});
const promise2 = new Promise((resolve, reject) => {
  void resolve;
  setTimeout(() => {
    reject(new Error('Timed out after 3s'));
  }, 3000);
});
const handleSuccess = () => {
  const div = document.createElement('div');
  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
};
const handleError = (err) => {
  const div = document.createElement('div');
  div.className = 'message error-message';
  div.textContent = `Promise was rejected! ${err?.message ?? ''}`;
  document.body.appendChild(div);
};
promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
