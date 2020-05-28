window.getColorReference();
function setValue(id) {
  return document.getElementById(id).value;
}
function getColorReference() {
  var colors = document.querySelectorAll('input[type="range"]');
  var formInput = document.querySelectorAll('input[type="text"]');
  var i = 0;
  for (color of colors) {
    document.getElementById(color.id + 'Value').value = setValue(color.id);
  }
  document.querySelector(
    'div#box-color'
  ).style.backgroundColor = `RGB(${colors[0].value},${colors[1].value},${colors[2].value})`;
}
