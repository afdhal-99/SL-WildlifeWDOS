// Function to handle login
function login() {
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");
  
    if (username === "username" && password === "password") {
      alert("Login successful!");
      document.getElementById("loginBtn").style.display = "none";
      document.getElementById("logoutBtn").style.display = "inline-block";
      document.getElementById("saveBtn").style.display = "inline-block"; // Show save button
      enableEditing();
    } else {
      alert("Login unsuccessful. Please try again.");
    }
  }
  
  // Function to handle logout
  function logout() {
    document.getElementById("loginBtn").style.display = "inline-block";
    document.getElementById("logoutBtn").style.display = "none";
    document.getElementById("saveBtn").style.display = "none"; // Hide save button
    disableEditing();
  }
  
  // Function to enable content editing
  function enableEditing() {
    const titleElement = document.getElementById("title");
    const contentElement = document.getElementById("content");
  
    titleElement.contentEditable = true;
    contentElement.contentEditable = true;
  }
  
  // Function to disable content editing
  function disableEditing() {
    const titleElement = document.getElementById("title");
    const contentElement = document.getElementById("content");
  
    titleElement.contentEditable = false;
    contentElement.contentEditable = false;
  }
  
  // Function to save content to localStorage
  function saveContent() {
    const title = document.getElementById("title").textContent;
    const content = document.getElementById("content").textContent;
  
    localStorage.setItem("content", JSON.stringify({ title, content }));
  }
  
  // Event listeners
  document.getElementById("loginBtn").addEventListener("click", login);
  document.getElementById("logoutBtn").addEventListener("click", logout);
  document.getElementById("saveBtn").addEventListener("click", saveContent); // Save button
  document.getElementById("title").addEventListener("input", saveContent);
  document.getElementById("content").addEventListener("input", saveContent);
  
  // Load initial content
  function loadContent() {
    const content = JSON.parse(localStorage.getItem("content"));
  
    if (content) {
      document.getElementById("title").textContent = content.title;
      document.getElementById("content").textContent = content.content;
    }
  }
  
  loadContent(); // Load content when the page loads