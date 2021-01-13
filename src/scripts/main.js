'use strict';

const logo = document.querySelector('.logo');

function createMessage(messageClass, text) {
  const div = document.createElement('div');

  div.className = `${messageClass}`;
  div.innerHTML = `<h2>${text}</h2>`;
  document.body.append(div);
}

const promiseFirst = new Promise((resolve) => {
  resolve(logo.addEventListener('click', e => {
    createMessage('message', 'Promise was resolved!');
  }
  )
  );
}
);

const promiseSecond = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(
      createMessage('error-message', 'Promise was rejected!'));
  }, 3000);
}
);

promiseFirst.then();

promiseSecond.catch();
