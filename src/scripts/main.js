const successFunc = (message) => {
  const successDiv = document.createElement('div');

  successDiv.className = 'message';
  successDiv.innerText = message;
  document.body.appendChild(successDiv);
};

const errorFunc = (error) => {
  const errorDiv = document.createElement('div');

  errorDiv.className = 'message error-message';
  errorDiv.innerText = error;
  document.body.appendChild(errorDiv);
};

document.addEventListener('DOMContentLoaded', () => {
  const logoElement = document.querySelector('.logo');
  let isResolved = false;

  if (logoElement) {
    const promise1 = new Promise((resolve, reject) => {
      logoElement.addEventListener('click', () => {
        if (!isResolved) {
          isResolved = true;
          resolve('Promise was resolved!');
        }
      });
    });

    const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!isResolved) {
          isResolved = true;
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('Promise was rejected!');
        }
      }, 3000);
    });

    promise1
      .then((message) => {
        successFunc(message);
      })
      .catch((error) => {
        errorFunc(error);
      });

    promise2
      .then((message) => {
        successFunc(message);
      })
      .catch((error) => {
        errorFunc(error);
      });
  } else {
    errorFunc('Element .logo nie został znaleziony!');
  }
});
