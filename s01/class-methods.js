// 'Clase'
var User = (function() {
  // Variable de clase
  var users_count = 0;

  // Constructor
  var User = function User(attributes) {
    var i = 0;

    for (i in attributes) {
      this[i] = attributes[i];
    }

    // El valor de users_count es el mismo para cada instancia de User y para User mismo
    console.log(users_count);
  };

  // Métodos de instancia con prototype
  User.prototype.getEmail = function() {
    return this['email'];
  };

  // Métodos de clase
  User.increase_counter = function(){
    return users_count += 1;
  };

  User.count = function(){
    return users_count;
  };

  return User;
})();