async function showAvatar(name) {
  // read github user
  let githubUser = await axios.get(`https://api.github.com/users/${name}`);

  // show the avatar
  document.getElementById('useravatar').src = githubUser.data.avatar_url;
  document.getElementById('username').innerHTML = githubUser.data.name;

  return githubUser;
}

showAvatar('your-username-here');

async function showStargazers() {
  // read github user
  let githubUsers = await axios.get(`
    https://api.github.com/repos/axios/axios/stargazers`);

  // show the avatars
  // iterare over the response data
  // insert each avatar's image and username into the DOM.
  // choose whichever type of iterator for each git user..

  //   githubUsers.data.forEach(function(githubUser) {
  //     let img = document.createElement('img');
  //     img.src = githubUser.avatar_url;
  //     document.body.append(img);
  //   });

  return githubUsers;
}

showStargazers();
