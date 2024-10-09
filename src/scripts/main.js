const but = document.querySelector('.logo');

const prom1 = new Promise((resolve) => {
  but.addEventListener('click', () => {
    const newDiv = document.createElement('div');

    newDiv.innerHTML = 'Promise was resolved!';
    newDiv.classList.add('message');

    const parentElement = document.querySelector('body');

    parentElement.appendChild(newDiv);

    resolve();
  });
});

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const newDiv2 = document.createElement('div');

    newDiv2.innerHTML = 'Promise was rejected!';
    newDiv2.classList.add('message', 'error-message');

    const parentElement = document.querySelector('body');

    parentElement.appendChild(newDiv2);
  }, 3000);
});

prom1.then(() => {
  return prom2;
});
