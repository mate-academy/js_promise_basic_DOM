'use strict';

// write your code here
function promisesBasic() {
  const logo = document.querySelector('.logo');

  if (!logo) {
    return;
  }

  const appendMessage = (text, isError) => {
    const div = document.createElement('div');

    div.classList.add('message');

    if (isError) {
      div.classList.add('error-message');
    }

    div.textContent = text;
    document.body.append(div);
  };

  const promise1 = new Promise((resolve) => {
    logo.addEventListener(
      'click',
      () => {
        resolve();
      },
      { once: true },
    );
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Rejected in 3 seconds'));
    }, 3000);
  });

  promise1
    .then(() => {
      appendMessage('Promise was resolved!', false);
    })
    .catch(() => {
      appendMessage('Promise was rejected!', true);
    });

  promise2
    .then(() => {
      appendMessage('Promise was resolved!', false);
    })
    .catch(() => {
      appendMessage('Promise was rejected!', true);
    });
}

promisesBasic();
