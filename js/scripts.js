function toggleAsideContainer() {
  const asideContainer = document.getElementById("asideContainer");
  asideContainer.classList.toggle("fv-aside-shown");
}

let tableTabs = document.querySelectorAll(".fv-table-tab");
let sidebarMenu = document.getElementById("sidenav-menu");
let sideMenu = document.querySelector(".fv-sidenav");
let closeMenu = document.getElementById("close-menu");

sidebarMenu.addEventListener("click", () => {
  sideMenu.classList.toggle("fv-show-sidenav");
});

closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("fv-show-sidenav");
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
