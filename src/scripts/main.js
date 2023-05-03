'use strict';

const logo = document.querySelector('.logo');

const appendDiv = (res, className) => {
  const messageDiv = document.createElement('div');

  messageDiv.setAttribute('class', className);
  messageDiv.textContent = res;
  document.body.append(messageDiv);
};

const promise1 = new Promise((resolve, reject) => {
  logo.onclick = () => {
    resolve('Promise was resolved!');
  };
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(res => {
  appendDiv(res, 'message');
})
  .catch(res => {
    alert(res);
  });

promise2.then(res => alert(res))
  .catch(res => {
    appendDiv(res, 'error-message message');
  });
