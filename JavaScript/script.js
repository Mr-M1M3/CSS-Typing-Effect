// Created by Abir Sheikh
var elem = document.getElementById("text");
var elem_content = elem.innerHTML;
function text() {
  return elem.innerHTML;
}
var index = 0
elem.innerHTML = "";
setInterval(() => {
  elem.innerHTML += elem_content.charAt(index);
  index++;
  if (index == elem_content.length) {
    setTimeout(() => {
      elem.innerHTML = "";
      index = 0;
    }, 1000);
  }
}, 200);
