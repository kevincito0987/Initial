var express = require("express");
var app = express();

app.get("/", inicio);
app.get("/cursos", cursos);


function inicio(peticion, resultado)
{
  resultado.send("That's my <m>app.</m>");
}
function cursos(peticion, resultado)
{
  resultado.send("That're all  of <strong> courses. </strong>");
}
app.listen(8989);
