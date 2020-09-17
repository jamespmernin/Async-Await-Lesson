async function showAvatar(name) {
  // read github user
  try {
    let githubUser = await axios.get(`https://api.github.com/users/${name}`);
    console.log(githubUser);

    // show the avatar
    document.getElementById('useravatar').src = githubUser.data.avatar_url;
    document.getElementById('username').innerHTML = githubUser.data.name;

    return githubUser;

  } catch (error) {
    console.log(`Error: ${error}`);
  } finally {
    console.log('This has been resolved.');
  }

  axios.get(`https://api.github.com/users/${name}`).then((res) => {
    console.log(res);
  })
}

showAvatar('JamesMernin');

function showStargazers() {
  // read github user
  let githubUsers = axios.get(`
    https://api.github.com/repos/axios/axios/stargazers`);

  // show the avatars
  // iterate over the response data
  // insert each avatar's image and username into the DOM.
  // choose whichever type of iterator for each git user..

  return githubUsers;
}

// showStargazers();
