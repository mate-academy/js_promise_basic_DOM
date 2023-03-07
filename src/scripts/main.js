'use strict';

  const logo = document.getElementById('logo');

  logo.addEventListener('click', () => {
    const box1 = document.createElement('div');
    document.body.appendChild(box1);
    box1.className += 'message';

    const box2 = document.createElement('div');
    document.body.appendChild(box2);
    box2.className += 'errormessage';

    const promise1 = new Promise((resolve, reject) => {
      logo.addEventListener('click', () => {
        resolve()
        reject()
      })
    })

    promise1.then(() => {
      box1.textContent += 'Promise was resolved!';
    })

    promise1.catch(() => {
      box1.textContent += 'Promise was rejected!';

    })

    const promise2 = new Promise((resolve, reject) => {
      logo.addEventListener('click', () => {
        resolve()
      })
      setTimeout(() => {
        reject();
      }, 3000);
    });

    promise1.then(() => {
      box2.textContent += 'Promise was resolved!';
    })

    promise2.catch(() => {
      box2.textContent += 'Promise was rejected!';
    });
  });

