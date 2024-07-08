'use strict';

document.querySelector('.logo').addEventListener('click', () => {
  return new Promise((resolve, reject) => {
    resolve(createMsg('Promise was resolved!'));

    setTimeout(
      () => reject(createMsg('Promise was rejected!', 'error-message')),
      3000,
    );
  });
});

function createMsg(desc, classResult) {
  const msgBlock = document.createElement('div');
  const paragraf = document.createElement('p');

  msgBlock.classList.add('message');

  if (classResult) {
    msgBlock.className += ` ${classResult}`;
  }

  paragraf.textContent = desc;
  msgBlock.append(paragraf);
  document.body.append(msgBlock);
}
