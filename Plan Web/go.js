up = document.querySelector(".up");
up.addEventListener("click", function () {
  document.body.scrollTop = 500; // For Safari
  document.documentElement.scrollTop = 500; // For Chrome, Firefox, IE and Opera
});
