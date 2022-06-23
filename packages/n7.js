var a = document.getElementById("p_1");
var b = document.getElementById("p_2");
var c = document.getElementById("p_3");
var d = document.getElementById("b_1");
var e = document.getElementById("b_2");
var f = document.getElementById("b_3");
var g = parseInt(a.value);
var h = parseInt(b.value);
var i = parseInt(c.value);
d.addEventListener("click", function cwI ()
{
  var g = parseInt(a.value);
  var h = parseInt(b.value);
  var i = parseInt(c.value);
  var p_s_i_1 = g / 1.19 ;
  var p_s_i_2 = h / 1.19 ;
  var p_s_i_3 = i / 1.19 ;
  var p_s_i_t = parseInt(p_s_i_1 + p_s_i_2 + p_s_i_3);
  alert(" The price whitout IVA of your three products is of: "  +  p_s_i_t  +  " COP. ")
});
e.addEventListener("click", function cpi ()
{
  var g = parseInt(a.value);
  var h = parseInt(b.value);
  var i = parseInt(c.value);
  var p_i_1 = g - (g / 1.19) ;
  var p_i_2 = h - (h / 1.19) ;
  var p_i_3 = i - (i / 1.19) ;
  var p_i_t = parseInt(p_i_1 + p_i_2 + p_i_3);
  alert(" The price of the IVA of your three products is of: "  +  p_i_t  +  " COP. ")
});
f.addEventListener("click", function cpt ()
{
  var g = parseInt(a.value);
  var h = parseInt(b.value);
  var i = parseInt(c.value);
  var p_t_1 = g;
  var p_t_2 = h;
  var p_t_3 = i;
  var p_t_t = parseInt(p_t_1 + p_t_2 + p_t_3);
  alert(" The total price of your three products is of: "  +  p_t_t  +  " COP. ")
});
