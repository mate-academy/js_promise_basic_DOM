'use strict';

const promise1 = new Promise((resolve) => {
  document.getElementById('logo').addEventListener('click', () => resolve());
});
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 3000));

const onSuccess = () => {
  const div = document.createElement('div');

  div.classList = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
};

const onFail = () => {
  const div = document.createElement('div');

  div.classList = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
};

promise1
  .then(onSuccess)
  .catch(onFail);

promise2
  .then(onSuccess)
  .catch(onFail);
