var a = document.getElementById("dibujito");
var b = document.getElementById("x");
var c = document.getElementById("y");
var d = document.getElementById("s_a");
var e = document.getElementById("r");
var h = document.getElementById("d");
var f = document.getElementById("colorcito");
var g = document.getElementById("botoncito");
var i = document.getElementById("botoncito_a");
var lienzo = a.getContext("2d");
var circle = a.getContext("2d");
var diametro = parseInt(i.value);
d_line("black", 1, 1, 299, 1);
d_line("black", 1, 299, 299, 299);
d_line("black", 1, 299, 1, 1);
d_line("black",299, 1, 299, 299);
g.addEventListener("click", function d_circle()
{
  var radio = parseInt(e.value);
  var xi = parseInt(b.value);
  var yi = parseInt(c.value);
  var ai = parseInt(d.value);
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
i.addEventListener("click", function cac ()
{
  var diametro = parseInt(h.value);
  var pi = 3.14;
  var a_c = pi * ((diametro * diametro) / 4);
  alert(" The area of your circle is of: "  +  a_c );
});
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
