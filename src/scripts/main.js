'use strict';

const logoBtn = document.querySelector('.logo');

new Promise((resolve, reject) => {
  logoBtn.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
}).then(data => {
  successHandler(data);
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
}).catch(data => {
  errorHandler(data);
});

const successHandler = (message) => {
  const div = document.createElement('div');

  div.setAttribute('class', 'message');
  div.innerHTML = message;

  const body = document.getElementsByTagName('body')[0];

  body.append(div);
};

const errorHandler = (message) => {
  const div = document.createElement('div');

  div.setAttribute('class', 'message error-message');
  div.innerHTML = message;

  const body = document.getElementsByTagName('body')[0];

  body.append(div);
};
