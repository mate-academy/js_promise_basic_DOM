'use strict';

    // Utility to append messages
    function appendMessage(text, isError = false) {
      const div = document.createElement('div');
      div.className = 'message' + (isError ? ' error-message' : '');
      div.textContent = text;
      document.body.appendChild(div);
    }

    // Promise 1: resolves on click of .logo
    const promise1 = new Promise((resolve) => {
      document.querySelector('.logo').addEventListener('click', () => {
        resolve();
      }, { once: true }); // once ensures it only resolves on the first click
    });

    // Promise 2: rejects after 3 seconds
    const promise2 = new Promise((_, reject) => {
      setTimeout(() => {
        reject();
      }, 3000);
    });

    // Success handler
    function onSuccess() {
      appendMessage('Promise was resolved!');
    }

    // Error handler
    function onError() {
      appendMessage('Promise was rejected!', true);
    }

    // Attach handlers
    promise1.then(onSuccess).catch(onError);
    promise2.then(onSuccess).catch(onError);