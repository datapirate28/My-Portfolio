// Element Toggle Function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar Variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar Toggle Functionality for Moblie
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});
