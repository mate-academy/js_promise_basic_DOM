'use strict';

const resolvers = [];
const promises = [];

// defining first resolver
resolvers.push(
  (complete, cancel) => {
    document.addEventListener('click', complete);
  }
);

// defining second resolver
resolvers.push(
  (complete, cancel) => {
    setTimeout(cancel, 1000);
  }
);

// creating Promises
resolvers.forEach((resolver, i, array) => {
  promises.push(new Promise(resolver));
});

// initiating test for first Promise
promises[0].then((response) => {
  window.console.log('touched the screen with response: ', response);
});

// initiating test for second Promise
promises[1].catch((excuse) => {
  window.console.log('left 5 sec, there are error: ', excuse);
});
