var a = document.getElementById("cantidad");
var boton = document.getElementById("dinero");
var resultado = document.getElementById("resultado");
var imagenes = [];
imagenes["1000"] = "https://upload.wikimedia.org/wikipedia/commons/0/0c/Colombia_1000_pesos.jpg";
imagenes["2000"] = "https://upload.wikimedia.org/wikipedia/commons/8/8e/Billete_de_2000_pesos_colombia_anverso.jpg";
imagenes["5000"] = "https://i0.wp.com/www.numismatica-visual.es/wp-content/uploads/2016/11/5r.jpg";
imagenes["10000"] = "https://upload.wikimedia.org/wikipedia/commons/e/eb/Billete_de_10_mil_pesos_colombianos_anverso.png";
imagenes["20000"] = "https://www.banrep.gov.co/billetes/20-mil/images/20000/anverso20000.png";
imagenes["50000"] = "https://upload.wikimedia.org/wikipedia/commons/0/07/Anverso50000.png";
imagenes["100000"] = "http://static.pulzo.com/images/20190225084756/billete-de-100-mil.jpg";
class Billete
{
  constructor(v, c)
  {
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;
    this.imagen.src = imagenes[this.valor];
  }

}
var caja = [];
caja.push( new Billete(100000, 10));
caja.push( new Billete(50000, 10));
caja.push( new Billete(20000, 10));
caja.push( new Billete(10000, 10));
caja.push( new Billete(5000, 10));
caja.push( new Billete(2000, 10));
caja.push( new Billete(1000, 10));
var dinero = 0;
var entregado = [];
var div = 0;
var papeles = 0;
var billetes = ( 1000000 * 10 ) + ( 50000 * 10 ) + ( 20000 * 10 ) + ( 10000 * 10 ) + ( 5000 * 10 ) + ( 2000 * 10 ) + ( 1000 * 10 );
var dineroCaja = billetes;
console.log(dineroCaja);
boton.addEventListener("click", entregarDinero);
function entregarDinero()
{
    dinero = parseInt(a.value);
    var dibujado = [];
    dineroCaja -= dinero;
    console.log(dineroCaja);
    for (var i = 0; i < dinero; i++)
    {
      if (dineroCaja == 0 )
      {
        resultado.innerHTML= "I don't have more money.";
        console.log("I need more money");
      }
        else
        {
          for( var bi of caja )
          {
            if ( dinero >= 1000)
             {
               div = Math.floor( dinero / bi.valor );
               if ( div > bi.cantidad)
               {
                 papeles = bi.cantidad;
               }
               else
               {
                 papeles = div;
               }
               for (var i = 0; i < papeles; i++)
               {
                 dibujado.push( new Billete(bi.valor, ))
               }
               entregado.push( new Billete(bi.valor, papeles));
               dinero -= ( bi.valor * papeles );
               console.log(entregado);
            }
          }
          if ( dinero > dineroCaja )
          {
            resultado.innerHTML = "I don't have that amount. ";
          }
          else
          {
            resultado.innerHTML = "It has been retired;"  +  "<br/>";
            for (var e of entregado)
            {
              if ( e.cantidad > 0 )
              {
                   for (var i = 0; i < e.cantidad; i++)
                   {
                       resultado.innerHTML += "<img src=" + e.imagen.src + " />" + "<br />";

                   }
               }
            }
           }
        }
      }
    }
