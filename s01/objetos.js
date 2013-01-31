// pluck : Listar atributos seleccionados de cada objeto de un array
var pluck_attrs = function(users, attrs) {
  var results = [];

  var i, j,
    users_length = users.length,
    attrs_length = attrs.length;

  for(i = 0; i < users_length; i++) {
    var result = [];
    
    for(j = 0; j < attrs_length; j++) {
      // (j == 0) -> (attrs[j] == 'email')
      // (j == 1) -> (attrs[j] == 'name')

      var attr = attrs[j],
        user = users[i];

      result.push(user[attr]);
    }

    results.push(result);
  }

  return results;
}

var users = [{
  email : 'alvaro@xenda.pe',
  name : 'Alvaro Pereyra',
  id : 2
}, {
  email : 'daniel@xenda.pe',
  name : 'Daniel Subauste',
  id : 4
}, {
  email : 'gustavo@xenda.pe',
  name : 'Gustavo Leon',
  id : 6
}];

pluck_attrs(users, ['email', 'name']);

/*
  [
    ['alvaro@xenda.pe', 'Alvaro Pereyra'],
    ['daniel@xenda.pe', 'Daniel Subauste'],
    ['gustavo@xenda.pe', 'Gustavo Leon']
  ]
*/