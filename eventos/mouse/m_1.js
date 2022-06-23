var a = document.getElementById("dibujito");
var papel = a.getContext("2d");
var rect = a.getBoundingClientRect();
var x = 0, y = 0, drawing = false, colorcito, grosor;
var c = document.getElementById("defcolor");
var g = document.getElementById("defgrosor");
a.addEventListener("mousedown", function(e)
{
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
  drawing = true;
});
a.addEventListener("mousemove", function(e)
{
    if (drawing==true)
    {
     draw(x, y, e.clientX - rect.left, e.clientY - rect.top, papel);
     x = e.clientX - rect.left;
     y = e.clientY - rect.top;
     console.log("it works");
    }
});
a.addEventListener("mouseup", function(e)
  {
    if (drawing == true)
    {
      draw(x, y, e.clientX - rect.left, e.clientY - rect.top, papel);
      x = 0;
      y = 0;
      drawing = false;
      console.log("alone");
    }
  });
d_line("black", 1, 1, 299, 1, papel);
d_line("black", 1, 299, 299, 299, papel);
d_line("black", 1, 299, 1, 1, papel);
d_line("black", 299, 299, 299, 1, papel);
function defcolor(c)
{
  colorcito = c;
}
function defgrosor(g)
{
  grosor = g;
}
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
function draw(x1, y1, x2, y2, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = colorcito;
  lienzo.lineWidth = grosor;
  lienzo.moveTo(x1, y1);
  lienzo.lineTo(x2, y2);
  lienzo.stroke();
  lienzo.closePath();
}
