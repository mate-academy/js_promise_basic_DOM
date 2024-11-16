'use strict';

function createMessage(text, className = 'message') {
    const div = document.createElement('div');

    div.classList = className;
    div.textContent = text;
    document.body.append(div);
}

const promise1 = new Promise((resolve) => {
    document.querySelector('.logo').addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  });
  
  promise1.then((message) => {
    createMessage(message);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });
  
  promise2.catch((error) => {

    createMessage(error, 'message error-message')
  });
  