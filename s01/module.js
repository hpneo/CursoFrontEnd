var UserModule = (function() {
  var users = [];

  /*
  ==============================================
    Functional scoping: UserModule tiene el contexto global (window)
  ==============================================
  */
  console.log('outer scope', this);

  return {
    add : function(user) {
      /*
      ==============================================
        UserModule.add tiene como contexto el objeto que retorna UserModule ({add : function() {}, remove : function() {}, ...})
        Sin embargo, puede acceder a las variables declaradas en el contexto externo (dentro de UserModule)
      ==============================================
      */
      console.log('scope', this);
      users.push(user);
    },
    remove : function(user) {
      users.splice(users.indexOf(user), 1);
    },
    each : function(callback) {
      for (var i = 0; i < users.length; i++) {
        callback(users[i]);
      }
    },
    count : function() {
      return users.length;
    }
  };
})();