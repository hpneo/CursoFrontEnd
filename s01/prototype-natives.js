var array = [1, 2, 4];

array.first(); // TypeError: Object 1,2,4 has no method 'first'
array.last(); // TypeError: Object 1,2,4 has no method 'last'

if(Array.prototype.first == undefined) {    // verificar que no exista ese método
  Array.prototype.first = function() {
    return this[0];
  }
}

Array.prototype.last = function() {
  return this[this.length - 1];
}

array.first(); //1
array.last(); //4

/*
====================================================
  NOTA: Tener cuidado al extender objetos nativos.
====================================================
*/

array.map(function(item) { return item*2 });
// Navegadores modernos: 2, 4, 8
// Navegadores antiguos: TypeError: Object 1,2,4 has no method 'map'