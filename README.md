# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Intro to Async Await

## Learning Objectives

_After this lesson, you will be able to:_

- Compose asynchronous functions.
- Compose try/catch blocks for API requests.
- Use `axios` library to make GET requests for data.
- Render new HTML content using data loaded from an async request.

## Exercises Labs

- EXERCISE: Writing Async Functions - 5min
- EXERCISE: Writing try/catch blocks - 5min
- EXERCISE: Fetching Github users info with axios - 10min

## Overview of key words

- Async
- Await
- Try/Catch

## Intro To Async

**What is Async?**

> Async, or asynchronous is a function that "pauses" until a specified result.

An asynchronous operation is one that allows the computer to “move on” to other tasks while waiting for the asynchronous operation to complete. Asynchronous programming means that time-consuming operations don’t have to bring everything else in our programs to a halt.

There are countless examples of asynchronicity in our everyday lives. Cleaning our house, for example, involves asynchronous operations such as a dishwasher washing our dishes or a washing machine washing our clothes. While we wait on the completion of those operations, we’re free to do other chores.

Similarly, web development makes use of asynchronous operations. Operations like making a network request or querying a database can be time-consuming, but JavaScript allows us to execute other tasks while awaiting their completion.

<details>
  <summary><strong>Q: Why do we care?</strong></summary>

A: We can’t use `await` in regular functions.

If we try to use `await` in a non-async function, there would be a syntax error:

```javascript
function fetchData() {
  let response = api.get("/people/1");
  let result = await response.data; // Syntax error
}
```

We will get this error if we do not put async before a function. As said, `await` only works inside an async function.

Let’s emphasize: `await` literally makes JavaScript wait until the promise settles, and then go on with the result. That doesn’t cost any CPU resources, because the engine can do other jobs meanwhile: execute other scripts, handle events etc.

</details>

## EXERCISE: Writing Async Functions - 5min

Using an async request, print one Github user's info in your terminal window.

```javascript
async function showAvatar(name) {
  // read github user
  let githubUser = await axios.get(`https://api.github.com/users/${name}`);

  console.log(githubUser);
}

showAvatar('your-username-here');
```

<details>
  <summary><strong>Q: Do async requests always work?</strong></summary>

A: No, `async` requests don’t always work!

People who are just starting to use `await` tend to forget the fact that APIs can return errors, or even nothing at all!

</details>

<details>
  <summary><strong>Q: What kind of everyday issues disrupt async requests?</strong></summary>

A: Poor network connection, low device battery, server outages, etc.

</details>

Have no fear, as we can wrap our `async` methods with try/catch blocks.

## Try/Catch Blocks

Safety first! Wrapping async functions inside try/catch blocks helps prevent unhandled errors.

```javascript
async function showAvatar(name) {
  try {
    // What's wrong with this request URL?
    let githubUser = await axios.get(`https://api.github.com/user/${name}`);
    console.log(githubUser.data);
  } catch (error) {
    console.log(`Oops! There was an error: ${error}`);
  }
}
```

## EXERCISE: Displaying Github user information using try/catch - 5min.

Inside `async.js`, wrap the lines from `let githubUser` until `return githubUser` inside a `try/catch` block. Inside the `catch` block, be sure to `console.log` any errors.

Once you have successfully removed any errors, display your github avatar image and username inside `index.html`.

- Sample code (from `async.js`):

```javascript
async function showAvatar(name) {
  // read github user
  let githubUser = await axios.get(`https://api.github.com/users/${name}`);

  // show the avatar
  document.getElementById('useravatar').src = githubUser.data.avatar_url;
  document.getElementById('username').innerHTML = githubUser.data.name;

  return githubUser;
}

showAvatar('your-username-here');
```

## EXERCISE: Displaying multiple Github users - 10min.

Inside `async.js`, modify the `showStargazers()` function to display all the github users' avatar images and username on your webpage.

- Sample code (from `async.js`):

```javascript
async function showStargazers() {
  // read github user
  let githubUsers = await axios.get(`
    https://api.github.com/repos/axios/axios/stargazers`);

  // show the avatars
  // iterare over the response data
  // insert each avatar's image and username into the DOM.
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = 'col-md-1';
  document.body.append(img);

  return githubUsers;
}

showStargazers();
```

### Bonus Challenges:

- In `showStargazers()`, can you pass in any new parameters? For instance, you could specify how many github users to display, or even the repository name.

## Resources

- [Async Await](https://javascript.info/async-await)
