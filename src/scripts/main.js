'use strict';

const logo = document.querySelector('.logo');
const resolvedMessage = document.createElement('div');
const rejectedMessage = document.createElement('div');

resolvedMessage.innerText = `Promise was resolved!`;
rejectedMessage.innerText = 'Promise was rejected!';

resolvedMessage.classList.add('message');
rejectedMessage.classList.add('error-message');

function createMessage() {
  const resolve = (resolved, rejected) => {
    logo.addEventListener('click', () => {
      document.body.append(resolvedMessage);

      resolved(resolvedMessage);

      setTimeout(() => {
        document.body.append(rejectedMessage);

        rejected(rejectedMessage);
      }, 3000);
    });
  };

  return new Promise(resolve);
}

createMessage();
