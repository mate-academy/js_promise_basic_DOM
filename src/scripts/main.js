'use strict';
const promise1 = new Promise (resolve => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve()
  })
})

const promise2 = new Promise ((_, reject) => {
  setTimeout(() => {
    reject()
  }, 3000)
})

function newMessage (text, isErorr = false) => {
  const newMessage = document.createElement('div');
  newMessage.classList.add = ('message');
  if (isError) {
    newMessage.classList = ('error-message')
  }
    newMessage.textContent = text;
    document.body.appendChild(newMessage);
  }


// write your code here
