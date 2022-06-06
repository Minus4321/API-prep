const postListEl = document.querySelector(".post-list");
const id = localStorage.getItem("id");


async function onSearchChange(event) {
  // similar to 'window.location.origin'
  const id = event.target.value; 
  renderPosts(id);
}

// Function is similar to one in index.js
async function renderPosts(id) {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  const postsData = await posts.json();
  console.log(postsData)

  // always remember to use await for fetching and 'converting' to frontend
  // need to convert every element in the array (postsData) into html, so using .map() below...
  
  // remember .map will return everything in an array
  // below we're mapping every single object in the json into html
  postListEl.innerHTML = postsData.map(post => postHTML(post)).join(''); 
  // converting the joined array into an string
  
}


// function below dynamically passes in current post that we're on
function postHTML(post) {
  return `
    <div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>
  `
}

renderPosts(id);

// Keep a note of 'Network' tab in inspect element
// You can check headers, payload, preview, response, etc for debugging and other stuff
// You may need to clear everything but mess around with the page and you'll see how those
// things work, (e.g. click on the elements under 'Name' in the same 'Network' tab
// A lot of frontend development is involved with this ^^
// Also never copy and paste code, refactor whenever possible.