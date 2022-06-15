'use strict';

function prom1() {
  const logo = document.querySelector('.logo');

  const resolver = (complete, err) => {
    logo.addEventListener('click', () => {
      complete(`Promise was resolved!`);
    });
  };

  return new Promise(resolver);
}

prom1()
  .then(result => {
    const message = document.createElement('div');

    message.className = 'message';
    message.innerHTML = result;
    document.body.append(message);
  });

function prom2() {
  const resolver = (complete, cancel) => {
    setTimeout(() => {
      cancel('Promise was rejected!');
    }, 3000);
  };

  return new Promise(resolver);
}

prom2()
  .catch(error => {
    const errorMessage = document.createElement('div');

    errorMessage.className = 'error-message';
    errorMessage.innerHTML = error;
    document.body.append(errorMessage);
  });
