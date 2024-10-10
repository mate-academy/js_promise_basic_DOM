function handlePromises() {
  const but = document.querySelector('.logo');

  const prom1 = new Promise((resolve) => {
    but.addEventListener('click', () => {
      createAndAppendMessage('Promise was resolved!', ['message']);
      resolve();
    });
  });

  const prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      createAndAppendMessage('Promise was rejected!', [
        'message',
        'error-message',
      ]);
    }, 3000);
  });

  prom1.then(() => prom2);
}

function createAndAppendMessage(text, classNames = []) {
  const newDiv = document.createElement('div');

  newDiv.innerHTML = text;

  classNames.forEach((className) => newDiv.classList.add(className));

  const parentElement = document.querySelector('body');

  parentElement.appendChild(newDiv);
}

handlePromises();
