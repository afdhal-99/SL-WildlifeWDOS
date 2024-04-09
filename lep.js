document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("sectionData_lep")) {
      fetch("lep.json")
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("sectionData_lep", JSON.stringify(data));
          loadDataIntoPage(data);
        })
        .catch((error) => console.error("Error fetching data: ", error));
    } else {
      const storedData = JSON.parse(localStorage.getItem("sectionData_lep"));
      loadDataIntoPage(storedData);
    }
  });
  
  function loadDataIntoPage(data) {
    const section1 = data.sections[0];
    const section1Header = document.querySelector("#lep_section_01_header_01");
    const section1Para = document.querySelector("#lep_section_01_para_01");
  
    section1Header.textContent = section1.title;
    section1Para.textContent = section1.content;
  
  
    const section3 = data.sections[1];
    const section3Header = document.querySelector("#lep_section_03_header_01");
    const section3Para = document.querySelector("#lep_section_03_para_01");
  
    section3Header.textContent = section3.title;
    section3Para.textContent = section3.content;
  
    const section4 = data.sections[2];
    const section4Header = document.querySelector("#lep_section_04_header_01");
    const section4Para = document.querySelector("#lep_section_04_para_01");
  
    section4Header.textContent = section4.title;
    section4Para.textContent = section4.content;

    const section5 = data.sections[3];
    const section5Header = document.querySelector("#lep_section_05_header_01");
    const section5Para = document.querySelector("#lep_section_05_para_01");
  
    section5Header.textContent = section5.title;
    section5Para.textContent = section5.content;

    const section6 = data.sections[4];
    const section6Header = document.querySelector("#lep_section_06_header_01");
    const section6Para = document.querySelector("#lep_section_06_para_01");
  
    section6Header.textContent = section6.title;
    section6Para.textContent = section6.content;

    const section7 = data.sections[5];
    const section7Header = document.querySelector("#lep_section_07_header_01");
    const section7Para = document.querySelector("#lep_section_07_para_01");
  
    section7Header.textContent = section7.title;
    section7Para.textContent = section7.content;

    const section8 = data.sections[6];
    const section8Header = document.querySelector("#lep_section_08_header_01");
    const section8Para = document.querySelector("#lep_section_08_para_01");
  
    section8Header.textContent = section8.title;
    section8Para.textContent = section8.content;
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
    const titleElement0 = document.getElementById("lep_section_01_header_01");
    const contentElement0 = document.getElementById("lep_section_01_para_01");

    const titleElement02 = document.getElementById("lep_section_03_header_01");
    const contentElement02 = document.getElementById("lep_section_03_para_01");

    const titleElement03 = document.getElementById("lep_section_04_header_01");
    const contentElement03 = document.getElementById("lep_section_04_para_01");

    const titleElement04 = document.getElementById("lep_section_04_header_01");
    const contentElement04 = document.getElementById("lep_section_04_para_01");

    const titleElement05 = document.getElementById("lep_section_04_header_01");
    const contentElement05 = document.getElementById("lep_section_04_para_01");

    const titleElement06 = document.getElementById("lep_section_04_header_01");
    const contentElement06 = document.getElementById("lep_section_04_para_01");

    const titleElement07 = document.getElementById("lep_section_04_header_01");
    const contentElement07 = document.getElementById("lep_section_04_para_01");
  
    titleElement0.contentEditable = true;
    contentElement0.contentEditable = true;
    titleElement02.contentEditable = true;
    contentElement02.contentEditable = true;
    titleElement03.contentEditable = true;
    contentElement03.contentEditable = true;
    titleElement04.contentEditable = true;
    contentElement04.contentEditable = true;
    titleElement05.contentEditable = true;
    contentElement05.contentEditable = true;
    titleElement06.contentEditable = true;
    contentElement06.contentEditable = true;
    titleElement07.contentEditable = true;
    contentElement07.contentEditable = true;
  }
  
  // Function to disable content editing
  function disableEditing() {
    const titleElement0 = document.getElementById("lep_section_01_header_01");
    const contentElement0 = document.getElementById("lep_section_01_para_01");

    const titleElement02 = document.getElementById("lep_section_03_header_01");
    const contentElement02 = document.getElementById("lep_section_03_para_01");

    const titleElement03 = document.getElementById("lep_section_04_header_01");
    const contentElement03 = document.getElementById("lep_section_04_para_01");

    const titleElement04 = document.getElementById("lep_section_05_header_01");
    const contentElement04 = document.getElementById("lep_section_05_para_01");

    const titleElement05 = document.getElementById("lep_section_06_header_01");
    const contentElement05 = document.getElementById("lep_section_06_para_01");

    const titleElement06 = document.getElementById("lep_section_07_header_01");
    const contentElement06 = document.getElementById("lep_section_07_para_01");

    const titleElement07 = document.getElementById("lep_section_08_header_01");
    const contentElement07 = document.getElementById("lep_section_08_para_01");
  
    titleElement0.contentEditable = false;
    contentElement0.contentEditable = false;
    titleElement02.contentEditable = false;
    contentElement02.contentEditable = false;
    titleElement03.contentEditable = false;
    contentElement03.contentEditable = false;
    titleElement04.contentEditable = false;
    contentElement04.contentEditable = false;
    titleElement05.contentEditable = false;
    contentElement05.contentEditable = false;
    titleElement06.contentEditable = false;
    contentElement06.contentEditable = false;
    titleElement07.contentEditable = false;
    contentElement07.contentEditable = false;
  }
  
  // Function to save content to localStorage
  function saveContent() {
    const title = document.getElementById("lep_section_01_header_01").textContent;
    const content = document.getElementById("lep_section_01_para_01").textContent;

    const title01 = document.getElementById("lep_section_03_header_01").textContent;
    const content01 = document.getElementById("lep_section_03_para_01").textContent;

    const title02 = document.getElementById("lep_section_04_header_01").textContent;
    const content02 = document.getElementById("lep_section_04_para_01").textContent;

    const title03 = document.getElementById("lep_section_05_header_01").textContent;
    const content03 = document.getElementById("lep_section_05_para_01").textContent;

    const title04 = document.getElementById("lep_section_06_header_01").textContent;
    const content04 = document.getElementById("lep_section_06_para_01").textContent;

    const title05 = document.getElementById("lep_section_07_header_01").textContent;
    const content05 = document.getElementById("lep_section_07_para_01").textContent;

    const title06 = document.getElementById("lep_section_08_header_01").textContent;
    const content06 = document.getElementById("lep_section_08_para_01").textContent;


  
    localStorage.setItem("content", JSON.stringify({ title, content }));
    localStorage.setItem("content", JSON.stringify({ title01, content01 }));
    localStorage.setItem("content", JSON.stringify({ title02, content02 }));
    localStorage.setItem("content", JSON.stringify({ title03, content03 }));
    localStorage.setItem("content", JSON.stringify({ title04, content04 }));
    localStorage.setItem("content", JSON.stringify({ title05, content05 }));
    localStorage.setItem("content", JSON.stringify({ title06, content06 }));
  }
  
  // Event listeners
  document.getElementById("loginBtn").addEventListener("click", login);
  document.getElementById("logoutBtn").addEventListener("click", logout);
  document.getElementById("saveBtn").addEventListener("click", saveContent); // Save button
  document.getElementById("title").addEventListener("input", saveContent);
  document.getElementById("content").addEventListener("input", saveContent);
  
