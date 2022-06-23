var l = document.getElementById("Drawing");
var lienzo = l.getContext("2d");
var lienzo_2 = l.getContext("2d");
var a = document.getElementById("xi");
var b = document.getElementById("xf_1");
var c = document.getElementById("xf_2");
var d = document.getElementById("yi");
var e = document.getElementById("yf_1");
var f = document.getElementById("yf_2");
var m = document.getElementById("colorcito");
var boton_1 = document.getElementById("dr");
var i = document.getElementById("c_o");
var j = document.getElementById("c_a");
var boton_2 = document.getElementById("b_r_c");
d_line("black", 1, 1, 299, 1);
d_line("black", 1, 299, 299, 299);
d_line("black", 1, 299, 1, 1);
d_line("black", 299, 299, 299, 1);
boton_1.addEventListener("click", function c_1()
{
  d_triangle();
});
boton_2.addEventListener("click", function c_2()
{
  var co = parseInt(i.value);
  var ca = parseInt(j.value);
  var numero = ( co * co ) + ( ca * ca );
  var r_cuadrada = Math.sqrt(numero);
  alert(" The square root of your triangle is of: "  +  r_cuadrada );
});
function d_triangle()
{
  var xs = parseInt(a.value);
  var xfs = parseInt(b.value);
  var xfd = parseInt(c.value);
  var ys = parseInt(d.value);
  var yfs = parseInt(e.value);
  var yfd = parseInt(f.value);
  var color = m.value;
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
