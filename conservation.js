document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("sectionData_conservation")) {
      fetch("conservation.json")
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("sectionData_conservation", JSON.stringify(data));
          loadDataIntoPage(data);
        })
        .catch((error) => console.error("Error fetching data: ", error));
    } else {
      const storedData = JSON.parse(localStorage.getItem("sectionData_conservation"));
      loadDataIntoPage(storedData);
    }
  });

function loadDataIntoPage(data) {
    const section1 = data.sections[0];
    const section1Header = document.querySelector("#conservation_section_01_header_01");
    const section1Para = document.querySelector("#conservation_section_01_para_01");
  
    section1Header.textContent = section1.title;
    section1Para.textContent = section1.content;
  }

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
    const titleElement0 = document.getElementById("conservation_section_01_header_01");
    const contentElement0 = document.getElementById("conservation_section_01_para_01");
  
    titleElement0.contentEditable = true;
    contentElement0.contentEditable = true;
  }
  
  // Function to disable content editing
  function disableEditing() {
    const titleElement = document.getElementById("conservation_section_01_header_01");
    const contentElement = document.getElementById("conservation_section_01_para_01");
  
    titleElement.contentEditable = false;
    contentElement.contentEditable = false;
  }
  
  // Function to save content to localStorage
  function saveContent() {
    const title = document.getElementById("conservation_section_01_header_01").textContent;
    const content = document.getElementById("conservation_section_01_para_01").textContent;

  
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
    const content = JSON.parse(localStorage.getItem("sections"));
  
    if (content) {
      document.getElementById("conservation_section_01_header_01").textContent = index.title;
      document.getElementById("conservation_section_01_para_01").textContent = content.content;
    }
  }
  
  loadContent(); // Load content when the page loads
  




