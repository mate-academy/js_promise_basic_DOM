'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise2
  .then(() => {
    const div = document.createElement('div');

    div.classList.add('message');

    div.innerHTML = 'Promise was resolved!';

    document.body.append(div);
  })
  .catch(() => {
    const div = document.createElement('div');

    div.className = 'message error-message';

    div.innerHTML = 'Promise was rejected!';

    document.body.append(div);
  });

promise1
  .then(() => {
    const div = document.createElement('div');

    div.classList.add('message');

    div.innerHTML = 'Promise was resolved!';

    document.body.append(div);
  })
  .catch(() => {
    const div = document.createElement('div');

    div.className = 'message error-message';

    div.innerHTML = 'Promise was rejected!';

    document.body.append(div);
  });
