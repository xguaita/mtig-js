// Definición de la clase Robot
function Robot(nombre) {
  this.nombre= nombre || 'sin nombre',
  this.estado= 0;
}

Robot.prototype= {
  modoEspera: function() {
    console.log(this.nombre + ': Iniciando modo espera...');
    this.estado= 0;
    console.log(this.nombre + ': En modo espera!');
  },

  activar: function() {
    console.log(this.nombre + ': Saliendo modo espera...');
    this.estado= 1;
    console.log(this.nombre + ': Activado!');
  },

  ayuda: function() {
    if (this.estado === 1) {
      console.log(this.nombre + ': Vengo inmediatamente!');
    } else console.log(this.nombre + ': Piiiip');
  }
};
// FIN definición de la clase Robot

// Definición de la subclase RobotArreglaTodo
function RobotArreglaTodo(nombre) {
  var tipo= 'arreglatodo';
  Robot.call(this, nombre); // Invocamos el constructor de Robot con this
  this.getTipo= function() {
    return tipo;
  };
}

RobotArreglaTodo.prototype= new Robot(); // Herencia;

RobotArreglaTodo.prototype.constructor= RobotArreglaTodo;

RobotArreglaTodo.prototype.arreglar= function(item) {
  if (this.estado === 1) {
    if (item && item !== '') {
      console.log(this.nombre + ': Arreglando ' + item);
    } else console.log(this.nombre + ': Debes indicarme qué quieres que arregle');
  } else console.log(this.nombre + ': Piiiip');
};
// FIN definición de la subclase RobotArreglaTodo

// Definición de la subclase RobotTraductor
function RobotTraductor(nombre) {
  var tipo= 'traductor';
  Robot.call(this, nombre); // Invocamos el constructor de Robot con this
  this.getTipo= function() {
    return tipo;
  };
}

RobotTraductor.prototype= new Robot(); // Herencia;

RobotTraductor.prototype.constructor= RobotTraductor;

RobotTraductor.prototype.traducir= function(texto) {
  if (this.estado === 1) {
    if (texto && texto !== '') {
      console.log(this.nombre + ': Traduciendo ' + texto);
    } else console.log(this.nombre + ': Debes indicarme qué quieres que traduzca');
  } else console.log(this.nombre + ': Piiiip');
};

RobotTraductor.prototype.ayuda= function() {
  if (this.estado === 1) {
    console.log(this.nombre + ': Ahora vengo. Aunque no es mi cometido intentaré ayudar');
  } else console.log(this.nombre + ': Piiiip');
};
// FIN definición de la subclase RobotTraductor

// Definición de la subclase RobotCombate
function RobotCombate(nombre) {
  var tipo= 'combate';
  Robot.call(this, nombre); // Invocamos el constructor de Robot con this
  this.getTipo= function() {
    return tipo;
  };
}

RobotCombate.prototype= new Robot(); // Herencia

RobotCombate.prototype.constructor= RobotCombate;

RobotCombate.prototype.atacar= function(texto) {
  if (this.estado === 0) this.activar();
  console.log('Al ataqueeee!!!!!');
};

RobotCombate.prototype.defender= function(texto) {
  if (this.estado === 0) this.activar();
  console.log('Defendiendo la posición!');
};

RobotCombate.prototype.ayuda= function() {
  console.log(this.nombre + ': Piiiip');
};
// FIN definición de la subclase RobotTraductor


var R2D2= new RobotArreglaTodo('R2D2'),
    C3PO= new RobotTraductor('C3PO'),
    Anikilator01= new RobotCombate('Anikilator01');
