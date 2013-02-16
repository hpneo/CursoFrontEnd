var promise = $.ajax({ url : '/users.json' });

var listUsers = function(array_of_users) {
  for(var i = 0; i < array_of_users.length; i++) {
    console.log(array_of_users[i]);
  }
}

var showMessage = function(array_of_users) {
  alert('Usuarios devueltos: ' + array_of_users.length);
}

var showResponse = function(xhr, status, message) {
  alert(status + ' : ' + message);
}

promise.done(listUsers).done(showMessage);
promise.fail(showResponse);

promise.then(listUsers, showResponse);

promise.fail = function(xhr, status, message) {
  showResponse.apply(null, arguments);
}

$.ajax({
  url : '/users.json',
  success : function(array_of_users) {
    for(var i = 0; i < array_of_users.length; i++) {
      console.log(array_of_users[i]);
    }

    alert('Usuarios devueltos: ' + array_of_users.length);
  }
});