'use strict';

// write your code here

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

function showSuccsessMessage() {
  const div = document.createElement('div');

  div.className = 'message';

  div.textContent = 'Promise was resolved!';

  document.body.append(div);
}

function showFaileMessage() {
  const div = document.createElement('div');

  div.className = 'message error-message';

  div.textContent = 'Promise was rejected!';

  document.body.append(div);
}

promise1.then(showSuccsessMessage).catch(showFaileMessage);
promise2.then(showSuccsessMessage).catch(showFaileMessage);
