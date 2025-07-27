// promise1 – resolve po kliknięciu .logo
const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise1 resolved: Click!');
  });
});

promise1
  .then((message) => {
    const div = document.createElement('div');

    div.className = 'success';
    div.innerText = message;
    document.body.appendChild(div);
  })
  .catch((error) => {
    const div = document.createElement('div');

    div.className = 'error';
    div.innerText = error.message;
    document.body.appendChild(div);
  });

// promise2 – reject po 3 sekundach
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise2 rejected after 3 seconds'));
  }, 3000);
});

promise2
  .then((message) => {
    const div = document.createElement('div');

    div.className = 'success';
    div.innerText = message;
    document.body.appendChild(div);
  })
  .catch((error) => {
    const div = document.createElement('div');

    div.className = 'error';
    div.innerText = error.message;
    document.body.appendChild(div);
  });
