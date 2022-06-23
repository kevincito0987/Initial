var g = document.getElementById("circles_1");
var t = document.getElementById("text_lines");
var boton = document.getElementById("button");
var ancho = g.width;
var circle = g.getContext("2d");
var lienzo = g.getContext("2d");
var lienzo_2 = g.getContext("2d");
boton.addEventListener("click", d_click);
console.log("I'll be better." + circle );
d_line("black", 1, 1,  ancho - 1, 1);
d_line("black", ancho - 1, ancho - 1, ancho - 1,  1);
d_line("black", 1, ancho - 1, 1, 1);
d_line("black", ancho - 1, 1, ancho - 1, ancho - 1);
console.log("lines" + lines);
function d_line(color, xstart, xend, ystart, yend)
{
 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.lineWidth = 5;
 lienzo.moveTo(xstart, ystart);
 lienzo.lineTo(xend, yend);
 lienzo.stroke();
 lienzo.closePath();
}
function d_circle(xi, yi, r, ai, af, an)
{
  circle.beginPath();
  circle.strokeStyle = " #6E2C00 ";
  circle.fillStyle = " #6E2C00";
   //circle.arch(xin, yin, ri, ain, afi, ani);
   circle.arc(150, 150, 70, 0, 2*Math.PI, false);
  circle.fill();
  circle.stroke();
}
function d_triangle()
{
 lienzo_2.beginPath();
 lienzo_2.moveTo(200, 200);
 lienzo_2.lineTo(200, 100);
 lienzo_2.lineTo(100, 100);
 lienzo_2.fill();
}
function d_click ()
{
 var t_1;
  console.log(t);
  var lines = parseInt(t.value);
  var i = 0;
  var ys, xe, ye, xs, x, xy;
  var xi, yi, r, ai, af, af, ra;
  var xin, yin, ri, ain, afi, ani;
  var space = ancho / lines;
  for (i=0; i<lines; i++)
  {
    ys = ye = space * i;
    xe = x = space * ( i + 1 );
    xs = xy = 300 - (i * space);
    d_line("blue", 1, ys, x, 299);
    d_line("green", xs, 1, 1, ye);
    d_line("orange", 299, ys, xy, 299);
    d_line("yellow", xy, 299, 1, xy);
    console.log("lines" + i);
    i++;
  }
  lienzo.strokeStyle = "red";
  lienzo.fillStyle = "red";
  lienzo.fillRect(75, 75, 150, 150);
  d_circle();
  lienzo_2.fillStyle = "#5DADE2";
  d_triangle();
}
