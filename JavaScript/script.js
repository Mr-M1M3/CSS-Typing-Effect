function type() {
  var texts_type = ["Abir Sheikh", "A Human", "A Web Developer"];
  var arr_index = 0;
  let index = 0;
  let typing_speed = 200;
  const type_container = document.getElementById("typewriter-container");
  let current_text_to_type = texts_type[arr_index];
  let text_container = document.getElementById("text-to-type");
  text_container.innerHTML = "";
  type_forward();
  function type_forward() {
    var typing_forward = setInterval(() => {
      text_container.innerHTML += current_text_to_type.charAt(index);
      index++;
      if (index == current_text_to_type.length) {
        index = 0;
        clearInterval(typing_forward);
        setTimeout(() => {
          arr_index++;
          if (arr_index == texts_type.length) {
            arr_index = 0;
          }
          type_backward();
        }, 2000);
      }
    }, typing_speed);
  }
  function type_backward() {
    var typing_backward = setInterval(() => {
      text_container.innerHTML = text_container.innerHTML.substr(
        0,
        text_container.innerHTML.length - 1
      );
      if (text_container.innerHTML.length == 0) {
        clearInterval(typing_backward);
        current_text_to_type = texts_type[arr_index];
        type_forward();
      }
    }, typing_speed);
  }
}
type();
