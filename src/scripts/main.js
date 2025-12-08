'use strict';

const promise1 = new Promise((resolve, reject) => {
    const icon = document.querySelector(".logo");

    if (!icon) {
        reject(new Error("Element .logo not found."));
        return;
    }

    icon.addEventListener('click', () => {
        resolve();
    });
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Promise 2 timed out after 3 seconds."));
    }, 3000);
});

function showSuccess() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved';

  document.body.appendChild(div);
}

function showError() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected';
  document.body.appendChild(div);
}

promise1
  .then(() => {
    showSuccess();
  })

  .catch(() => {
    showError();
  });

promise2.catch(() => {
  showError();
});
