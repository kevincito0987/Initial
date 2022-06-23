var a = document.getElementById("botoncito");
var b = document.getElementById("a_h");
var c = document.getElementById("a_p");
var d = document.getElementById("a_l");
a.addEventListener("click", e_p);
function e_p (p)
{
  var eh = parseInt(b.value);
  var ep = parseInt(c.value);
  var el = parseInt(d.value);
  var p = eh + ep + el / 3;
  alert(p);
}
