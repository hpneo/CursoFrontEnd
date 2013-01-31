var User = function User(attributes){
  User.contador = 0;
  for(a in attributes) {
    this[a] = attributes[a];
  }

  // Función privada, no puede ser ejecutada por una instancia de User
  var nombreCompleto = function() {
    return this.name;
  }
};

// Definir métodos a nivel de prototype:
// Métodos definidos dentro de constructor se crean por cada instancia
User.prototype.saludar = function() {
  return "Hola, soy " + this.name;
};