'use strict';

function promise1() {
  return new Promise((resolve) => {
    const logo = document.getElementById('logo')
    const message1 = document.getElementById('message1')

    logo.addEventListener('click', () => {
      resolve(message1.innertext = 'Promise was resolved!')
    })
  })
}

function promise2() {
  return new Promise((reject) => {
    const logo = document.getElementById('logo')
    const message2 = document.getElementById('message2')

    logo.addEventListener('click', () => {
      reject(message2.innertext = 'Promise was rejected!')
    })
  })
}

