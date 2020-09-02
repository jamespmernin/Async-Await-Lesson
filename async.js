  function showAvatar(name) {
  // read github user
    let githubUser = axios.get(`https://api.github.com/users/${name}`);
  
    // show the avatar
    document.getElementById('useravatar').src = githubUser.data.avatar_url;
    document.getElementById('username').innerHTML = githubUser.data.name;
  
    return githubUser;

}

showAvatar('subtlesnow');

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
