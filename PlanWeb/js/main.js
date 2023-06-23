var menu = document.getElementById("menu");
var menuline1 = document.getElementById("menu-line1");
var menuline2 = document.getElementById("menu-line2");
var menuactive = document.getElementById("menuactive");
var flag = true;

menu.addEventListener("click", function () {
  if (flag) {
    menuline1.classList.add("menu-line1active");
    menuline2.classList.add("menu-line2active");
    menuactive.style.display = "flex";
  } else {
    menuline1.classList.remove("menu-line1active");
    menuline2.classList.remove("menu-line2active");
    menuactive.style.display = "none";
  }
  flag = !flag;
  console.log(flag);
});
