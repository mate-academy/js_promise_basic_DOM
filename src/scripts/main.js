'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  document.body.append(createMsgBlock('Promise was resolved!'));
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch(() => {
  document.body.append(
    createMsgBlock('Promise was rejected!', 'error-message'),
  );
});

function createMsgBlock(desc, classResult) {
  const msgBlock = document.createElement('div');
  const paragraf = document.createElement('p');

  msgBlock.classList.add('message');

  if (classResult) {
    msgBlock.className += ` ${classResult}`;
  }

  paragraf.textContent = desc;
  msgBlock.append(paragraf);

  return msgBlock;
}
