document.addEventListener("keydown", k_Down);
var a = document.getElementById("dibujo");
var keys = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
var z = document.getElementById("colorcito");
console.log(keys);
var papel = a.getContext("2d");
var x = 150;
var y = 150;
d_line("black", 1, 1, 299, 1, papel);
d_line("black", 1, 299, 299, 299, papel);
d_line("black", 1, 299, 1, 1, papel);
d_line("black", 299, 299, 299, 1, papel);
function d_line(color, xstart, ystart, xend, yend, lienzo)
{
 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.lineWidth = 3;
 lienzo.moveTo(xstart, ystart);
 lienzo.lineTo(xend, yend);
 lienzo.stroke();
 lienzo.closePath();
}
function k_Down(evento)
{
  var color = z.value;
  var move = 5;
  switch(evento.keyCode)
  {
    case keys.UP:
      d_line(color, x, y, x, y - move, papel);
      y = y - move;
      console.log("to up");
    break;
    case keys.DOWN:
       d_line(color, x, y, x, y + move, papel);
       y = y + move;
       console.log("to down");
    break;
    case keys.LEFT:
        d_line(color, x, y, x - move, y, papel);
        x = x - move;
        console.log("to lef");
    break;
    case keys.RIGHT:
       d_line(color, x, y, x + move, y, papel);
       x = x + move;
       console.log("to right");
    break;
    default:
    console.log("another key");
    break;
    }
}
