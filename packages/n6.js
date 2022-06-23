var usuario = parseInt(prompt("Write 1 if you work during the day or write 2 if you work during the day."));
var z = 0;
if ( usuario == 1) {
   z = 7;
}
else if ( usuario == 2) {
 z= 8;
}
else {
  z = 9;
  alert("Error");
}
var a = document.getElementById("horas");
var b = document.getElementById("p_hora");
var boton = document.getElementById("botoncito");
var c = document.getElementById("s_a");
boton.addEventListener("click", salary);
function salary ()
{
  var hora = parseInt(a.value);
  var p_h = parseInt(b.value);
  var s_d = parseInt(c.value);
  if ( z = 7 )
 {
    var salary_1 = ( p_h * hora) + s_d;
    alert("Your salary is of: \n"  +  salary_1 + " COP \n weekly.");
  }
 else if ( z = 8  )
 {
   var salary_2 = ( p_h * hora ) + s_d;
   alert( "Your salary is of: \n"  +  salary_2 + " COP \n weekly.");
  }
}
