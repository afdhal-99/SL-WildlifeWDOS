document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("sectionData_wildlife")) {
      fetch("sl-wildlife.json")
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("sectionData_wildlife", JSON.stringify(data));
          loadDataIntoPage(data);
        })
        .catch((error) => console.error("Error fetching data: ", error));
    } else {
      const storedData = JSON.parse(localStorage.getItem("sectionData_wildlife"));
      loadDataIntoPage(storedData);
    }
  });
  
  function loadDataIntoPage(data) {
    const section1 = data.sections[0];
    const section1Header = document.querySelector("#sl_wildlife_section_01_header_01");
    const section1Para = document.querySelector("#sl_wildlife_section_01_para_01");
  
    section1Header.textContent = section1.title;
    section1Para.textContent = section1.content;
  
    const section2 = data.sections[1];
    const section2Header = document.querySelector("#sl_wildlife_section_02_header_01");
    const section2Para = document.querySelector("#sl_wildlife_section_02_para_01");
  
    section2Header.textContent = section2.title;
    section2Para.textContent = section2.content;
  }



  // Function to handle login
function login() {
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");
  
    if (username === "user" && password === "user") {
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
    const titleElement0 = document.getElementById("sl_wildlife_section_01_header_01");
    const contentElement0 = document.getElementById("sl_wildlife_section_01_para_01");

    const titleElement01 = document.getElementById("sl_wildlife_section_02_header_01");
    const contentElement01 = document.getElementById("sl_wildlife_section_02_para_01");
  
    titleElement0.contentEditable = true;
    contentElement0.contentEditable = true;
    titleElement01.contentEditable = true;
    contentElement01.contentEditable = true;
  }
  
  // Function to disable content editing
  function disableEditing() {
    const titleElement = document.getElementById("sl_wildlife_section_01_header_01");
    const contentElement = document.getElementById("sl_wildlife_section_01_para_01");

    const titleElement01 = document.getElementById("sl_wildlife_section_02_header_01");
    const contentElement01 = document.getElementById("sl_wildlife_section_02_para_01");
  
    titleElement.contentEditable = false;
    contentElement.contentEditable = false;
    titleElement01.contentEditable = false;
    contentElement01.contentEditable = false;
  }
  
  // Function to save content to localStorage
  function saveContent() {
    const title = document.getElementById("sl_wildlife_section_01_header_01").textContent;
    const content = document.getElementById("sl_wildlife_section_01_para_01").textContent;

    const title01 = document.getElementById("sl_wildlife_section_02_header_01").textContent;
    const content01 = document.getElementById("sl_wildlife_section_02_para_01").textContent;


  
    localStorage.setItem("content", JSON.stringify({ title, content }));
    localStorage.setItem("content", JSON.stringify({ title01, content01 }));
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
      document.getElementById("sl_wildlife_section_01_header_01").textContent = index.title;
      document.getElementById("sl_wildlife_section_01_para_01").textContent = content.content;
      document.getElementById("sl_wildlife_section_02_header_01").textContent = index.title;
      document.getElementById("sl_wildlife_section_02_para_01").textContent = content.content;
    }
  }
  
  loadContent(); // Load content when the page loads
  




