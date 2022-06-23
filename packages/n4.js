var a = document.getElementById("dibujo");
var b = document.getElementById("x");
var c = document.getElementById("x_1");
var d = document.getElementById("y");
var f = document.getElementById("colorcito");
var g = document.getElementById("botoncito");
var e = document.getElementById("botoncito_a");
var h = document.getElementById("b");
var lienzo = a.getContext("2d");
var circle = a.getContext("2d");
var radio = parseInt(h.value);
var pi = 3.14;
g.addEventListener("click", function d_circle()
{
  var radio = parseInt(h.value);
  var xi = parseInt(b.value);
  var yi = parseInt(d.value);
  var ai = parseInt(c.value);
  var color = f.value;
  var af = 2*Math.PI;
  var an = true;
  circle.beginPath();
  circle.strokeStyle = color;
  circle.fillStyle = color;
   //circle.arch(xi, yi, radio, ai, af, an);
   circle.arc(xi, yi, radio, ai, af, an);
  circle.fill();
  circle.stroke();
  console.log("It works");
});
e.addEventListener("click", function a_circle(){
  var radio = parseInt(h.value);
  var pi = 3.14;
  var area = pi * (radio * radio);
  alert("El area del circulo es de:" + area);
});
d_line("black", 1, 1, 299, 1);
d_line("black", 1, 299, 299, 299);
d_line("black", 1, 299, 1, 1);
d_line("black",299, 1, 299, 299);
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
