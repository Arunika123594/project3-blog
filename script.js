const posts = [
  {
    title: "Welcome to My Blog",
    content: "This is the first post on my new blog. Stay tuned for more content!"
  },
  {
    title: "JavaScript Tips and Tricks",
    content: "Here are some useful JavaScript tips every developer should know."
  },
  {
    title: "Learning CSS Grid",
    content: "CSS Grid is a powerful tool for creating responsive layouts."
  },
  {
    title: "Why Git is Essential for Developers",
    content: "Git is a version control system that every developer should master."
  }
];

const blogContainer = document.getElementById("blogContainer");
const searchInput = document.getElementById("searchInput");

// Function to display posts
function displayPosts(filteredPosts) {
  blogContainer.innerHTML = "";
  if (filteredPosts.length === 0) {
    blogContainer.innerHTML = "<p>No blog posts found.</p>";
    return;
  }

  filteredPosts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
    `;
    blogContainer.appendChild(postElement);
  });
}

// Initial load
displayPosts(posts);

// Search functionality
searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = posts.filter(
    post =>
      post.title.toLowerCase().includes(keyword) ||
      post.content.toLowerCase().includes(keyword)
  );
  displayPosts(filtered);
});
