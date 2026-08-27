import './styles/main.scss';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

function showSuccess() {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';

  document.body.append(message);
}

function showError() {
  const message = document.createElement('div');

  message.className = 'message error-message';
  message.textContent = 'Promise was rejected!';

  document.body.append(message);
}

promise1.then(showSuccess).catch(showError);
promise2.then(showSuccess).catch(showError);
