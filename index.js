// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"


const userListEl = document.querySelector(".user-list");

// function that uses 'fetch' dynamically based on the input value
async function main() {  
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  // Need to wait here as this is a  end request
  const usersData = await users.json();
  // Need to wait for the above as well as json() method returns a Promise
  // SO HAVE TO USE 2 'awaits' since .json is also a promise and if you do that, use 'async'
  // Remember, when returning a Promise, it is still pending because
  // it is asynchronous (assuming the data is not there yet)
  userListEl.innerHTML = usersData.map((user) => userHTML(user)).join("");
}

main();

// function below re-routes to the new page
function showUserPosts(id) {
  // So routing to a new page using vanilla js below
  // Logging out windows.location will show us some objects in the console
  localStorage.setItem = ("id", id);
  window.location.href = `${window.location.origin}/user.html`;
}

// function below passes in current userId that we're on
function userHTML(user) {
  return `<div class="user-card" onclick="showUserPosts(${user.id})">
  <div class="user-card__container">
    <h3>${user.name}</h4>
      <p><b>Email:</b> ${user.email}</p>
      <p><b>Phone:</b> ${user.phone}</p>
      <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
  </div>
</div>`;
}








/*

Other

*/

// all functions are dynamic as they need to be

// console.log(usersData);
// returns an array full of objects, but we want an array full of html
// elements.

// if you want to access (this) date, you will need to log the following
// 'log(await (await fetch("https://jsonplaceholder.typicode.com/users")).json());'