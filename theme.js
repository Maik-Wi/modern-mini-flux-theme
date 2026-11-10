// Paste into Miniflux Settings > Preferences > Custom JS.

const activePage = document.querySelector("#header-menu li.active [data-page]")?.dataset.page;

for (const element of document.querySelectorAll(
  ".page-footer, .category-item:not(.category-has-unread)",
)) {
  element.remove();
}

if (activePage === "history" || activePage === "unread") {
  document.querySelectorAll(".pagination-top").forEach((element) => element.remove());
}

for (const element of document.querySelectorAll(
  ".pagination-top, .pagination-bottom, .pagination-entry-top, .pagination-entry-bottom",
)) {
  if (!element.querySelector(".pagination a")) {
    element.remove();
  }
}
