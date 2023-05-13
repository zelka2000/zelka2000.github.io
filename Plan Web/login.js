function go() {
  var password = document.getElementById("password").value;
  var w = document.getElementById("w");
  var yes = document.getElementById("yes");
  var yestext1 = document.getElementById("yes-text1");
  if (password == "rogovplanweb") {
    w.style.display = "none";
    yes.style.display = "flex";
    yestext1.innerHTML = "Вы вошли в систему. Вы Рогов Александр";
  }
  if (password == "zelenovplanweb") {
    w.style.display = "none";
    yes.style.display = "flex";
    yestext1.innerHTML = "Вы вошли в систему. Вы Зеленов Антон";
  }
}
