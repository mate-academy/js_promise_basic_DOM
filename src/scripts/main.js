'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, function handler() {
      element.removeEventListener(eventName, handler);

      resolve(`
        It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}`);
    });
  });
}

function printMessage(message) {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  document.body.appendChild(div);
}

const input = document.querySelector('input#login');

waitFor(input, 'input').then(printMessage);
