const messages = {
  success: 'Promise was resolved!',
  error: 'Promise was rejected!',
  notFound: 'Element .logo nie został znaleziony!',
};

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
          resolve(messages.success);
        }
      });
    });

    const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!isResolved) {
          isResolved = true;
          reject(messages.error);
        }
      }, 3000);
    });

    promise1.then(successFunc).catch(errorFunc);
    promise2.then(successFunc).catch(errorFunc);
  } else {
    errorFunc(messages.notFound);
  }
});
