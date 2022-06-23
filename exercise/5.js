var bot_c_cl =  document.getElementById("boton_cl");
var bot_b_cl =  document.getElementById("boton_c");
var boton = document.getElementById("botoncito");
bot_b_cl.addEventListener("click", verificarBanco);
bot_c_cl.addEventListener("click", verificarCuenta);
function verificarBanco()
{
  var bcl = document.getElementById("banco_s");
  var banco = document.getElementById("banco_c");
  banco = 0;
  if (banco==0)
  {
    console.log("It works");
    bcl.innerHTML= "It's right";
  }
}
function verificarCuenta()
{
  var cc = document.getElementById("paso_s");
  var cuenta = document.getElementById("cuenta_c");
  cuenta = parseInt(cuenta.value);
  if (cuenta > 0 && cuenta <= 9999999999)
  {
    console.log("It works");
    cc.innerHTML= "It's right";
  }
}
