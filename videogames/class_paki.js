class Packiman
{
  constructor(n, v, a)
  {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.imagen.src = imagenes[this.nombre];
  }
  hablar()
  {
    alert(this.nombre);
  }
  show ()
  {
    document.write("<p>");
    document.body.appendChild(this.imagen);
    document.write( "<strong> " + this.nombre + " </strong> <br  /> " );
    document.write( "<m>Vida:</m> " + this.vida + "<br />");
    document.write( "<m>Ataque:</m> " + this.ataque + "<hr />");
    document.write("</p>");
  }
}
