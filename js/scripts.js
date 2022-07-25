const darkMode = localStorage.getItem("dark-mode");
const htmlDocument = document.querySelector("html");
const themeSelector = document.querySelector("#fv-theme-selector");
const loginLogo = document.querySelector("#loginBannerLogo");

if (darkMode === "enabled") {
  enableDarkMode();
  themeSelector.checked = true;
}

function toggleTheme() {
  if (themeSelector.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

function enableDarkMode() {
  htmlDocument.dataset.theme = "dark";
  localStorage.setItem("dark-mode", "enabled");
  return;
}

function disableDarkMode() {
  htmlDocument.dataset.theme = "";
  localStorage.setItem("dark-mode", "disabled");
  return;
}

function toggleAsideContainer() {
  const asideContainer = document.getElementById("asideContainer");
  asideContainer.classList.toggle("fv-aside-shown");
}

function selectSavingsTypeOnChange() {
  let savingsType = savingsTypeSelect.value;
  let currentForm = document.querySelector(".fv-savings-form-selected");
  if (savingsType) {
    if (currentForm) {
      currentForm.classList.remove("fv-savings-form-selected");
    }
    let selectedForm = document.querySelector(
      `[data-savings-form=${savingsType}]`
    );

    selectedForm.classList.add("fv-savings-form-selected");
  } else {
    return;
  }
}

let toastBtns = document.querySelectorAll("[data-fv-toast]");
let tableTabs = document.querySelectorAll(".fv-table-tab");
let sidebarMenu = document.getElementById("sidenav-menu");
let sideMenu = document.querySelector(".fv-sidenav");
let closeMenu = document.getElementById("close-menu");
let savingsTypeSelect = document.getElementById("savingsTypeSelect");

if (sidebarMenu) {
  sidebarMenu.addEventListener("click", () => {
    sideMenu.classList.toggle("fv-show-sidenav");
  });
}

if (closeMenu) {
  closeMenu.addEventListener("click", () => {
    sideMenu.classList.remove("fv-show-sidenav");
  });
}

toastBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let toastContainerID = btn.getAttribute("data-fv-target");

    let toastContainer = document.querySelector(toastContainerID);

    toastContainer.classList.add("fv-toast-show");

    setTimeout(() => {
      toastContainer.classList.remove("fv-toast-show");
    }, 10000);
  });
});

tableTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    let activeTab = document.querySelector(".fv-active-table-tab");
    let currentTable = document.querySelector(".fv-current-tab-table");

    if (tab.classList.contains("fv-active-table-tab")) {
      return;
    } else {
      let tabName = tab.getAttribute("data-tab");
      let tabTable = document.querySelector(`[data-table=${tabName}]`);

      activeTab.classList.remove("fv-active-table-tab");
      currentTable.classList.remove("fv-current-tab-table");

      tab.classList.add("fv-active-table-tab");
      tabTable.classList.add("fv-current-tab-table");
      return;
    }
  });
});
