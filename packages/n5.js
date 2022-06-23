var usuario = parseInt(prompt("Write 1 to comb celcious degrees to kelvins degrees or write 2 if you want to comb celcious degrees to farenheit degrees."));
if ( usuario == 1 )
{
  var degrees = parseInt(prompt("How much degrees do you want to comb"));
  var g_k = degrees + 273;
  document.write( degrees  +  "are"  +  g_k  +  "kelvins degrees");
}
else if (usuario == 2)
 {
   var degrees = parseInt(prompt("How much degrees do you want to comb"));
   var g_f = 9 / 5 * degrees + 32;
   document.write( degrees + "are" + g_f + "farenheit degrees");
}
else
 {
  alert("Your opcion isn't in our opcions.");
}
