var a = document.getElementById("precio");
var b = document.getElementById("descuento");
var c = document.getElementById("b_i");
var d = document.getElementById("b_p");
c.addEventListener("click", function c_IVA ()
{
  var producto = parseInt(a.value);
  var IVA = producto * 0.19;
  alert( " The IVA of your product is of: \n"   + IVA  + " COP.");
});
d.addEventListener("click", function c_Precio ()
{
  var producto = parseInt(a.value);
  var IVA = producto * 0.19;
  var descuento = parseInt(b.value) / 100;
  var d_p = descuento * ( producto + IVA ) ;
  var total = ( producto + IVA ) - d_p;
  alert( " You must pay: \n "  +  total +  " COP. ");
});
