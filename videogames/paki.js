var imagenes = [];
imagenes["cauchin"] = "https://static.platzi.com/media/files/clases-y-arrays-en-javascript/vaca.png";
imagenes["pokacho"] = "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/pollo.png";
imagenes["tocinauro"] = "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/cerdo.png";
var coleccion = [];
coleccion.push( new Packiman("cauchin", 100, 30 ));
coleccion.push( new Packiman("pokacho", 80, 50 ));
coleccion.push( new Packiman("tocinauro", 120, 40 )) ;
for ( var pakis of coleccion)
{
   pakis.show();
}
for (var x in coleccion[0])
{
  console.log(x);
}
