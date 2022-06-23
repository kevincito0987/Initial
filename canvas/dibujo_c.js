var d = document.getElementById("drawing");
var lienzo = d.getContext("2d");
 console.log(lienzo);
 var circle = d.getContext("2d");
 var lines = 30;
 var i = 0;
 var ys, xe, ye, xs, x, xy;
 var xi, yi, r, ai, af, af, ra;
 var xin, yin, ri, ain, afi, ani;
 for (i=0; i<lines; i++)
 {
   ys = ye = 10 * i;
   xe = x = 10 * ( i + 1 );
   xs = xy = 300 - (i * 10);
   d_line("red", 1, ys, x, 299);
   d_line("green", xs, 1, 1, ye);
   d_line("yellow", 299, ys, xy, 299);
   d_line("orange", xy, 300, 1, xy);
   console.log("lines" + i);
   i++;
 }
 d_line("black", 1, 1, 1, 299);
 d_line("black", 1, 299, 299, 299);
 d_line("black", 1, 299, 1, 1);
 d_line("black", 299, 299, 299, 1);
function d_line(color, xstart, xend, ystart, yend)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
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
d_circle();
function d_circle2(color, xi, yi, r, ai, af, an)
{
  circle.beginPath();
  circle.strokeStyle = "#F1C40F";
  circle.fillStyle = "#F1C40F";
   //circle.arch(xi, yi, r, ai, af, an);
   circle.arc(150, 150, 50, 0, 2*Math.PI, false);
  circle.fill();
  circle.stroke();
}
d_circle2();
