'use strict';

const logo = document.querySelector('.logo');

const showMessage = (posTop, posRight, description, type) => {
  const newBlock = document.createElement('div');
  const newDescription = document.createElement('p');

  newBlock.classList.add(type);
  newBlock.textContent = description;

  newBlock.append(newDescription);
  document.body.append(newBlock);

  newBlock.style.top = `${posTop}px`;
  newBlock.style.right = `${posRight}px`;

  newBlock.style.position = 'absolute';
  newBlock.style.padding = '25px';
  newBlock.style.fontFamily = 'Verdana, sans-serif';
  newBlock.style.fontSize = '18px';
  newBlock.style.fontWeight = '500';
  newBlock.style.textAlign = 'center';
  newBlock.style.borderRadius = '15px';
};

const firstPromise = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve('Done!');
  });
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Error!')), 3000);
});

firstPromise.then(() => {
  showMessage(10, 10, `Promise was resolved!`, `message`);
});

secondPromise.catch(() => {
  showMessage(150, 10, `Promise was rejected!`, `error-message`);

  setTimeout(() => document.querySelector(`.error-message`).remove(), 2000);
});
