var a = document.getElementById("c_1");
var b = document.getElementById("c_2");
var c = document.getElementById("c_3");
var d = document.getElementById("botoncito");
d.addEventListener("click", function cnf ()
{
  var e = parseInt(a.value);
  var f = parseInt(b.value);
  var g = parseInt(c.value);
  var nd = ( e * 0.3 ) + ( f * 0.3 ) + ( g * 0.4 );
  alert( "Your final note is of: " +  nd );
});
