'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.addEventListener('click', (e) => {
    if (e.target.className === 'logo') {
      resolve();
    }
  });
});

const createDiv = (text) => {
  const body = document.querySelector('body');
  const newDiv = document.createElement('div');
  const oldMessage = body.querySelector('.message');

  if (oldMessage) {
    oldMessage.remove();
  }

  newDiv.className = 'message';
  newDiv.innerHTML = text;
  body.append(newDiv);
};

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('3 sec out'));
  }, 3000);
});

promise1.then(onSuccess, onError);
promise2.then(onSuccess, onError);

function onSuccess() {
  createDiv(`Promise was resolved!`);
}

function onError() {
  createDiv(`Promise was rejected!`);
}
