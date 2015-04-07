var $cartaArriba = null, // Guarda la primera carta de una pareja de clicks
  $cartas = null, // Contenedor (div) de la lista de cartas
  $texto_panel = null, // Mensajes de texto
  numClicks = 0, // Contador de clicks
  parejas = 0, // Contador de parejas
  multiplicando = 0,
  multiplicador = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];


function CrearCartas() {
  var listaCartas = [20];

  // Crea la lista de multiplicaciones y resultados
  for (var i = 0; i < 10; i++) {
    listaCartas[i] = multiplicando + 'x' + multiplicador[i];
    listaCartas[i + 10] = eval(multiplicando * multiplicador[i]);
  }

  // Mezcla las cartas
  listaCartas = shuffle(listaCartas);

  // Crea las cartas
  for (i = 0; i < 20; i++) {
    $cartas.append('<div id=carta' + i + '><span>' + listaCartas[i] + '</span></div>');
  }
  // Añade un manejador del evento click a cada carta
  $cartas.children("div").click(ClickCarta);
}

function EmpezarJuego() {
  // Elimina cartas
  $cartas.empty();

  // Resetear texto del panel
  $texto_panel.html("0 clicks");

  // Inicializa variables
  numClicks = 0;
  parejas = 0;
  multiplicando = Math.floor(Math.random() * 8) + 2; // Número aleatorio entre 2 y 9

  // Crea cartas
  CrearCartas();

}

function ClickCarta() {
  var $carta = $(this),
    $carta_span = $carta.find("span");

  // No se puede hacer click en esta carta
  $carta.off("click");

  // Contabiliza clicks
  numClicks++;
  $texto_panel.html(numClicks + ' clicks');

  // Visualiza la carta
  $carta_span.fadeToggle();

  // Primera carta
  if ($cartaArriba === null) {
    $cartaArriba = $carta;
  } else { // Segunda carta
    // Son iguales?
    if (eval($carta_span.text().replace('x', '*') + ' == ' + $cartaArriba.find("span").text().replace('x', '*'))) { // Sí
      parejas++;
    } else { // Diferentes
      $cartaArriba.find("span").delay(600).fadeToggle();
      $carta_span.delay(600).fadeToggle();
      // Habilitar el click nuevamente
      $cartaArriba.click(ClickCarta);
      $carta.click(ClickCarta);
    }
    $cartaArriba = null;
  }

  // Hemos terminado?
  if (parejas == 10) { // Todas las parejas
    $texto_panel.html('Has encontrado todas las parejas con ' + numClicks + ' clicks');
  } else if (numClicks == 40) { // Número máximo de intentos
    $texto_panel.html('Has llegado al máximo de intentos y sólo has conseguido ' + parejas + ' pareja' + (parejas > 1 ? 's' : ''));
    // Quita el manejador del evento click a todas las cartas
    $cartas.children("div").off("click");
  }

}

$(function () {
  $cartas = $('#cartas');
  $texto_panel = $('#texto_panel');

  EmpezarJuego();
});
