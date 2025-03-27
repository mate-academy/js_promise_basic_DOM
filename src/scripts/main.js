const logo = document.getElementsByClassName('logo')[0];

logo.addEventListener('click', function () {
  new Promise((resolve, reject) => {
    resolve(successHandler());
  });
});

setTimeout(() => {
  new Promise((resolve, reject) => {
    reject(errorHandler());
  });
}, 3000);

function successHandler() {
  const divEl = document.createElement('div');

  divEl.className = 'message';
  divEl.innerText = 'Promise was resolved!';
  document.querySelector('body').append(divEl);
}

function errorHandler() {
  const divEl = document.createElement('div');

  divEl.className = 'message error-message';
  divEl.innerText = 'Promise was rejected!';
  document.querySelector('body').append(divEl);
}
