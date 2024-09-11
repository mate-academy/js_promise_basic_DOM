'use strict';

// write your code here
function createNewDiv(classList, textContent) {
  const newDiv = document.createElement('div');

  classList.forEach((cl) => newDiv.classList.add(cl));
  newDiv.textContent = textContent;
  document.body.appendChild(newDiv);
}

const promise1 = () => {
  return new Promise((resolve, reject) => {
    resolve('Promise was resolved!');
  });
};

const promise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
  });
};

promise2().catch((mess) => createNewDiv(['message', 'error-message'], mess));

document.querySelector('.logo').addEventListener('click', () => {
  promise1().then((mess) => {
    const divList = document.body.querySelectorAll('.message');

    const existingDiv = [...divList].filter((div) => {
      return div.className === 'message';
    });

    if (!existingDiv.length) {
      createNewDiv(['message'], mess);
    }
  });
});
