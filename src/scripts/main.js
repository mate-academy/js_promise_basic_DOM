const logo = document.querySelector('.logo');
const divElem = document.createElement('div');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

const handleSuccess = () => {
  divElem.className = 'message';
  divElem.textContent = 'Promise was resolved!';
  document.body.appendChild(divElem);
};

const handleError = () => {
  divElem.className = 'message error-message';
  divElem.textContent = 'Promise was rejected!';
  document.body.appendChild(divElem);
};

promise1.then(handleSuccess).catch(handleError);

promise2.then(handleSuccess).catch(handleError);
