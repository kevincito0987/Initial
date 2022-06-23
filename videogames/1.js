var b = document.getElementById("dibujito");
var m = document.getElementById("cows");
var n = document.getElementById("pigs");
var o = document.getElementById("chickens");
var boton = document.getElementById("botoncito");
var papel = b.getContext("2d");
var lienzo = b.getContext("2d");
boton.addEventListener("click", function all()
{
  var fondo =
  {
    url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/tile.png",
    cargaOk: false
  };
  fondo.image = new Image();
  fondo.image.src = fondo.url;
  fondo.image.addEventListener("load", function carga_f ()
  {
   fondo.cargaOk = true;
   draw();
  });
  var xi = random(0, 420);
  var yi = random(0, 420);
  var vaca =
  {
    url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/vaca.png",
    cargaOk: false
  };
  vaca.image = new Image();
  vaca.image.src = vaca.url;
  vaca.image.addEventListener("load", function carga_v ()
  {
   vaca.cargaOk = true;
   draw();
  });
  var cerdo =
  {
    url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/cerdo.png",
    cargaOk: false,
    posx: xi,
    posy: yi
  };
  cerdo.image = new Image();
  cerdo.image.src = cerdo.url;
  cerdo.image.addEventListener("load", function carga_c ()
  {
   cerdo.cargaOk = true;
   draw();
  });
  var pollo =
  {
    url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/pollo.png",
    cargaOk: false
  };
  pollo.image = new Image();
  pollo.image.src = pollo.url;
  pollo.image.addEventListener("load", function carga_p ()
  {
   pollo.cargaOk = true;
   draw();
  });
  var keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };
  document.addEventListener("keydown", function k_Down(evento)
          {
            var move = 5;
            switch(evento.keyCode)
            {
              case keys.UP:
                if (cerdo.posy > 0 )
                {
                  cerdo.posy = cerdo.posy - move;
                  clear();
                  draw();
                }
                console.log("to up");
              break;
              case keys.DOWN:
                 if (cerdo.posy < b.width - 80 )
                 {
                   cerdo.posy = cerdo.posy + move;
                   clear();
                   draw();
                 }
                 console.log("to down");
              break;
              case keys.LEFT:
                  if (cerdo.posx > 0)
                  {
                    cerdo.posx = cerdo.posx - move;
                    clear();
                    draw();
                  }
                  console.log("to lef");
              break;
              case keys.RIGHT:
                 if (cerdo.posx < b.width - 80)
                 {
                   cerdo.posx = cerdo.posx + move;
                   clear();
                   draw();
                 }
                 console.log("to right");
              break;
              default:
              console.log("another key");
              break;
              }
          });
          console.log(keys);
  var a;
  for (var i=0; i<10; i++)
  {
      a = random(0, 500);
  }
  function random (max, min)
  {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
  }
  function clear ()
  {
    papel.clearRect(0, 0, b.width, b.height);
    draw();
  }
  function d_line(color, xstart, ystart, xend, yend)
  {
   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.lineWidth = 5;
   lienzo.moveTo(xstart, ystart);
   lienzo.lineTo(xend, yend);
   lienzo.stroke();
   lienzo.closePath();
  }
  function draw()
  {
    var c_v = parseInt(m.value);
    var c_c = parseInt(n.value);
    var c_p = parseInt(o.value);
    var keys = {
      UP: 38,
      DOWN: 40,
      LEFT: 37,
      RIGHT: 39
    };
    if (fondo.cargaOk)
    {
      papel.drawImage(fondo.image, 0, 0);
      d_line("black", 1, 1, 499, 1);
      d_line("black", 1, 499, 499, 499);
      d_line("black", 1, 499, 1, 1);
      d_line("black", 499, 499, 499, 1);
    }
    if (vaca.cargaOk)
    {
      for (var v = 0; v < c_v; v++)
      {
        var x_v = random(0, 7);
        var y_v = random(0, 7);
        x_v = x_v * 60;
        y_v = y_v * 60;
        papel.drawImage(vaca.image, x_v, y_v);
        console.log(c_v);
      }
    }
    if (cerdo.cargaOk)
    {
      for (var c = 0; c < c_c; c++)
      {
        var x_c = random(0, 6);
        var y_c = random(0, 6);
        x_c = x_c * 80;
        y_c = y_c * 80;
        papel.drawImage(cerdo.image, cerdo.posx, cerdo.posy);
      }
    }
    if (pollo.cargaOk)
    {
      for (var p = 0; p < c_p; p++)
      {
        var x_p = random(0, 10);
        var y_p = random(0, 10);
        x_p = x_p * 40;
        y_p = y_p * 40;
       papel.drawImage(pollo.image, x_p, y_p);
      }
    }
  }
});
