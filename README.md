1. Replace `<your_account>` with your Github username in the link
    - [DEMO LINK](https://<your_account>.github.io/js_promise_basic_DOM/)
2. Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/)
    - There are no tests for this task so use `npm run lint` command instead of `npm test`

### Task: First promises

In this task you should create 2 promises.
1. The first promise should be resolved on a `click` on `.logo`.
2. The second promise should be rejected in 5 seconds.

That's all.

Implementation tips:
- You have to use DOM to notify user;
- Printed messages should not disappear;
- The message is block element with class `message` for first promise and `error-message` for second promise; 
- The message should have text `Promise was resolved!` and `Promise was rejected!`.
