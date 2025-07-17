"use strict";
const styles = document.querySelector(".input");
const iconArea = document.querySelector(".icon-area");
const formEmailEl = document.querySelector(".form-email");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailInput = document.querySelector(".input-email");
const submitButton = document.querySelector(".submit");
const experienceEl = document.querySelector(".experience-item-area");

submitButton.addEventListener("click", function (event) {
  if (emailInput.value === "") {
    alert("Vui Long Nhap email");
  } else if (emailInput.value.match(regex)) {
    event.preventDefault(); //ngăn chặn hành vi mặc định của form là tải lại trang.

    styles.classList.remove("hidden");
    formEmailEl.classList.add("hidden");
    iconArea.classList.remove("hidden");
  } else {
    alert("Email khong hop le");
  }
});

// --- Xử lý các nút View More/View Less cho các phần ---

// Lấy tất cả các "experience-section"
const experienceSections = document.querySelectorAll(".experience-section");

experienceSections.forEach((section) => {
  const viewMoreButton = section.querySelector(".view-more-button");
  const viewLessButton = section.querySelector(".view-less-button");
  const contentArea = section.querySelector(".experience-item-area");

  // Gắn sự kiện cho nút View More
  if (viewMoreButton) {
    viewMoreButton.addEventListener("click", function (event) {
      event.preventDefault();
      contentArea.classList.remove("hidden");
      viewMoreButton.classList.add("hidden");
      if (viewLessButton) {
        viewLessButton.classList.remove("hidden");
      }
    });
  }

  // Gắn sự kiện cho nút View Less
  if (viewLessButton) {
    viewLessButton.addEventListener("click", function (event) {
      event.preventDefault();
      contentArea.classList.add("hidden");
      viewLessButton.classList.add("hidden");
      if (viewMoreButton) {
        viewMoreButton.classList.remove("hidden");
      }
    });
  }
});
