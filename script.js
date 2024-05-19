document.getElementById("on").onclick = function () {
  document.getElementById("img").src =
    "https://www.w3schools.com/js/pic_bulbon.gif";
};

document.getElementById("off").onclick = function () {
  document.getElementById("img").src =
    "https://www.w3schools.com/js/pic_bulboff.gif";
};

document.getElementById("new").onclick = function () {
  document.getElementById("class01").innerHTML = "New Class JavaScript";
  document.getElementById("class01").style.color = "red";
  alert("Change the Text Color");
};
