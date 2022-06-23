var a = document.getElementById("Drawing");
var f = document.getElementById("base.");
var g = document.getElementById("h1.");
var boton = document.getElementById("botoncito");
var h = document.getElementById("color");
var b = document.getElementById("xi");
var c = document.getElementById("xf_1");
var ci = document.getElementById("xf_2");
var d = document.getElementById("yi");
var e = document.getElementById("yf_1");
var ei = document.getElementById("yf_2");
var dibujo = document.getElementById("dr");
var lienzo = a.getContext("2d");
var lienzo_2 = a.getContext("2d");
dibujo.addEventListener("click", d_click);
boton.addEventListener("click", d_click2);
d_line("black", 1, 1, 299, 1);
d_line("black", 1, 299, 299, 299);
d_line("black", 1, 299, 1, 1);
d_line("black", 299, 299, 299, 1);
console.log("I'll be better.");
function d_click ()
{
  d_triangle();
}
function d_click2()
{
  var base = parseInt(f.value);
  var altura = parseInt(g.value);
  var area = base * altura / 2;
  console.log( "El Area de su triangulo es de:" + area );
}
function d_triangle()
{
  var xs = parseInt(b.value);
  var xfs = parseInt(c.value);
  var xfd = parseInt(ci.value);
  var ys = parseInt(d.value);
  var yfs = parseInt(e.value);
  var yfd = parseInt(ei.value);
  var color = h.value;
  lienzo_2.fillStyle = color;
 lienzo_2.beginPath();
 lienzo_2.moveTo(xs, ys);
 lienzo_2.lineTo(xfs, yfs);
 lienzo_2.lineTo(xfd, yfd);
 lienzo_2.fill();
}
function d_line(color, xstart, ystart, xend, yend)
{
 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.lineWidth = 5;
 lienzo.moveTo(xstart, ystart);
 lienzo.lineTo(xend, yend);
 lienzo.stroke();
 lienzo.closePath();
}
