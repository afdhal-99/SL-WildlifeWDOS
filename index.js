document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("sectionData")) {
    fetch("index.json")
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("sectionData", JSON.stringify(data));
        loadDataIntoPage(data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  } else {
    const storedData = JSON.parse(localStorage.getItem("sectionData"));
    loadDataIntoPage(storedData);
  }
});

function loadDataIntoPage(data) {
  const section1 = data.sections[0];
  const section1Header = document.querySelector("#index_section_01_header_01");
  const section1Para = document.querySelector("#index_section_01_para_01");

  section1Header.textContent = section1.title;
  section1Para.textContent = section1.content;

  const section2 = data.sections[1];
  const section2Header = document.querySelector("#index_section_02_header_01");
  const section2Para = document.querySelector("#index_section_02_para_01");

  section2Header.textContent = section2.title;
  section2Para.textContent = section2.content;

  const section3 = data.sections[2];
  const section3Header = document.querySelector("#index_section_03_header_01");
  const section3Para = document.querySelector("#index_section_03_para_01");

  section3Header.textContent = section3.title;
  section3Para.textContent = section3.content;

  const section4 = data.sections[3];
  const section4Header = document.querySelector("#index_section_04_header_01");
  const section4Para = document.querySelector("#index_section_04_para_01");

  section4Header.textContent = section4.title;
  section4Para.textContent = section4.content;
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
  const titleElement0 = document.getElementById("index_section_01_header_01");
  const contentElement0 = document.getElementById("index_section_01_para_01");

  const titleElement01 = document.getElementById("index_section_02_header_01");
  const contentElement01 = document.getElementById("index_section_02_para_01");

  const titleElement02 = document.getElementById("index_section_03_header_01");
  const contentElement02 = document.getElementById("index_section_03_para_01");

  const titleElement03 = document.getElementById("index_section_04_header_01");
  const contentElement03 = document.getElementById("index_section_04_para_01");

  titleElement0.contentEditable = true;
  contentElement0.contentEditable = true;
  titleElement01.contentEditable = true;
  contentElement01.contentEditable = true;
  titleElement02.contentEditable = true;
  contentElement02.contentEditable = true;
  titleElement03.contentEditable = true;
  contentElement03.contentEditable = true;
}

// Function to disable content editing
function disableEditing() {
  const titleElement = document.getElementById("index_section_01_header_01");
  const contentElement = document.getElementById("index_section_01_para_01");

  const titleElement01 = document.getElementById("index_section_02_header_01");
  const contentElement01 = document.getElementById("index_section_02_para_01");

  const titleElement02 = document.getElementById("index_section_03_header_01");
  const contentElement02 = document.getElementById("index_section_03_para_01");

  const titleElement03 = document.getElementById("index_section_04_header_01");
  const contentElement03 = document.getElementById("index_section_04_para_01");

  titleElement.contentEditable = false;
  contentElement.contentEditable = false;
  titleElement01.contentEditable = false;
  contentElement01.contentEditable = false;
  titleElement02.contentEditable = false;
  contentElement02.contentEditable = false;
  titleElement03.contentEditable = false;
  contentElement03.contentEditable = false;
}

// Function to save content to localStorage
function saveContent() {
  const title = document.getElementById("index_section_01_header_01").textContent;
  const content = document.getElementById("index_section_01_para_01").textContent;

  const title01 = document.getElementById("index_section_02_header_01").textContent;
  const content01 = document.getElementById("index_section_02_para_01").textContent;

  const title02 = document.getElementById("index_section_03_header_01").textContent;
  const content02 = document.getElementById("index_section_03_para_01").textContent;

  const title03 = document.getElementById("index_section_04_header_01").textContent;
  const content03 = document.getElementById("index_section_04_para_01").textContent;



  localStorage.setItem("content", JSON.stringify({ title, content }));
  localStorage.setItem("content", JSON.stringify({ title01, content01 }));
  localStorage.setItem("content", JSON.stringify({ title02, content02 }));
  localStorage.setItem("content", JSON.stringify({ title03, content03 }));
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
    document.getElementById("index_section_01_header_01").textContent = index.title;
    document.getElementById("index_section_01_para_01").textContent = content.content;
    document.getElementById("index_section_02_header_01").textContent = index.title;
    document.getElementById("index_section_02_para_01").textContent = content.content;
    document.getElementById("index_section_03_header_01").textContent = index.title;
    document.getElementById("index_section_03_para_01").textContent = content.content;
    document.getElementById("index_section_04_header_01").textContent = index.title;
    document.getElementById("index_section_04_para_01").textContent = content.content;
  }
}

loadContent(); // Load content when the page loads

  




