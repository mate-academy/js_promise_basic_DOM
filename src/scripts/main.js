'use strict';

document.querySelector('.logo').addEventListener('click', () => {
  callPromise1();
  callPromise2();
});

function callPromise1() {
  const promise1 = new Promise((resolve, reject) => {
    resolve(createMsg('', 'Promise was resolved!'));
  });

  return promise1;
}

function callPromise2() {
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(
      () => reject(createMsg('error-message', 'Promise was rejected!')),
      3000,
    );
  });

  return promise2;
}

function createMsg(classResult, desc) {
  const msgBlock = document.createElement('div');
  const paragraf = document.createElement('p');

  msgBlock.classList.add('message');

  if (!classResult) {
    paragraf.textContent = desc;
    msgBlock.append(paragraf);
  } else {
    msgBlock.className += ` ${classResult}`;
    paragraf.textContent = desc;
    msgBlock.append(paragraf);
  }

  document.body.append(msgBlock);
}
