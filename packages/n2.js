var a = document.getElementById("dibujo");
var b = document.getElementById("x");
var c = document.getElementById("x_1");
var d = document.getElementById("y");
var e = document.getElementById("y_1");
var f = document.getElementById("boton_d");
var g = document.getElementById("b");
var h = document.getElementById("h");
var i = document.getElementById("boton_a");
var j = document.getElementById("colorcito");
var papel = a.getContext("2d");
f.addEventListener("click", d_square);
i.addEventListener("click", a_square);
d_line("black", 1, 1, 299, 1, papel);
d_line("black", 299, 299, 1, 299, papel);
d_line("black", 1, 299, 1, 1, papel);
d_line("bleck", 299, 1, 299, 299, papel);
function d_square()
{
  var color = j.value;
  var xs = parseInt(b.value);
  var xf = parseInt(c.value);
  var ys = parseInt(d.value);
  var yf = parseInt(e.value);
  papel.strokeStyle = color;
  papel.fillStyle = color;
  papel.fillRect(xs, ys, xf, yf);
  console.log("It works");
}
function a_square()
{
  var base = parseInt(g.value);
  var altura = parseInt(h.value);
  var area = base * altura;
  console.log("El area de su rectangulo es de:"  + area);
}
function d_line(color, xstart, ystart, xend, yend, lienzo)
{
 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.lineWidth = 5;
 lienzo.moveTo(xstart, ystart);
 lienzo.lineTo(xend, yend);
 lienzo.stroke();
 lienzo.closePath();
}
