var rotate_array = ["1", "2", "3", "6", "9", "8", "7", "4"];
let buttons = ["btn1", "btn2", "btn3", "btn6", "btn9", "btn8", "btn7", "btn4"];

function handleClick() {
  buttons.forEach(rotate);
}

function which_index(buttonId) {
  var button = document.getElementById(buttonId);
  var index = rotate_array.indexOf(button.innerHTML);

  return index;
}

function rotate(buttonId) {
  var button = document.getElementById(buttonId);

  // if (button.innerHTML == "1")
  // button.innerHTML = "4";
  if (button.innerHTML == rotate_array[0]) {
    button.innerHTML = rotate_array[rotate_array.length - 1];
  } else {
    var new_number = which_index(buttonId) - 1;
    button.innerHTML = rotate_array[new_number];
  }
}
