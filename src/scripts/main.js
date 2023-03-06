'use strict';

function firstDiv() {

  logo.addEventListener('click', AddNew);

  function AddNew() {
    const newDiv1 = document.createElement('div');
    newDiv1.classList.add('message')
  }

  logo.addEventListener('click', AddNew);

  function AddNew() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('error-message')
  }
}

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');
  logo.addEventListener('click', () => {
    resolve()
  })
  reject()
})

promise1.then(() => {
  newDiv.textContent = 'Promise was resolved!';
})

promise1.catch(() => {
  newDiv.textContent = 'Promise was rejected!';

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
  newDiv.textContent = 'Promise was resolved!';
})

promise2.catch(() => {
  newDiv.textContent = 'Promise was rejected!';
});
