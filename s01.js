// Métodos de objetos nativos

// Array

var numbers = [];
numbers.length; // 0

// - push

numbers.push(2);
numbers.length; // 1

numbers; // [2];

numbers.push(4);
numbers.length; // 2

numbers; // [2, 4];

numbers.push(6);
numbers.length; // 3

numbers; // [2, 4, 6];

numbers.push(8);
numbers.length; // 4

numbers.push(10);
numbers.length; // 5

// - pop

numbers.pop(); // 10
numbers.length; // 4

// - slice

[2, 4, 6, 8];

numbers.slice(1, 3); // [4, 6]

// - splice

var numbers_copy = numbers.slice(0);
numbers_copy.splice(2, 2); // [6, 8]
numbers_copy; // [2, 4]

[2, 4, 22, 8];

numbers_copy = numbers.slice(0);
numbers_copy.splice(2, 1, 22); // [6]
numbers_copy; // [2, 4, 22, 8]

// - indexOf

numbers_copy.indexOf(22); //2

// Object

var user = {
  id : 616,
  email : 'mrsanchez@xenda.pe',
  specialPowers : true
};

// - hasOwnProperty

user.hasOwnProperty('email'); //true
user.hasOwnProperty('firstName'); //false

// - for in

for (attribute in user) {
  console.log(attribute + ' : ' + user[attribute]);
}

user.email

var email_key = 'email';

user[email_key];

// id : 616
// email : mrsanchez@xenda.pe
// specialPowers : true

// Funciones

var markAsDone = function(task) {
  task.status = 'done';

  return task;
}

var markAsDone = function(task1, task2) {
  task1.status = 'done';
  task2.status = 'done';

  return [task1, task2];
}


var func3 = function(a, b, c) {};

func3(1, 2);
func3(1, 2, 3, 5);

var markAsDone = function() {
  var tasks = arguments,
  done_tasks = [], task;

  for (var i = 0; i < tasks.length; i++) {
    task = tasks[i];
    task.status = 'done';

    done_tasks.push(task);
  }

  return done_tasks;
};

var array = [2, 4, 7, 8];

for(var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for(i in array) {
  console.log(array[i]);
}

var obj = {
  id : 1,
  email : 'gustavo@xenda.pe',
  nombre : 'Gustavo',
  apellido : 'Leon'
};


// Objetos

var current_user = {
  id : 2,
  email : 'gustavo@xenda.pe',
  firstName : 'Gustavo',
  lastName : 'Leon',
  bio : 'Ninja Web Developer en @xendape. Universitario en mi tiempo libre. Man out of time.',
  fullName : function() {
    return this.firstName + ' ' + this.lastName;
  }
};

current_user.fullName();

// Prototype

var User = function User() {
  this.firstName = 'Gustavo';
  this.lastName = 'Leon';
};

User.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

var user = new User();
user.fullName();

// Extendiendo objetos

Array.prototype.first = function() {
  return this[0];
}

Array.prototype.last = function() {
  if (this.length > 0) {
    return this[this.length - 1];
  }
}

// Extendiendo objetos CON PRECAUCIÓN

if (Array.prototype.map == undefined) {
  Array.prototype.map = function() {
    return this;
  }
}

// Patrones

// Constructor
var User = function User(attributes) {
  this.email = attributes.email;
  this.nickname = attributes.nickname;
  this.firstName = attributes.firstName;
  this.lastName = attributes.lastName;
};

var new_user = new User({
  email : 'gustavo@xenda.pe',
  nickname : 'hpneo',
  firstName : 'Gustavo',
  lastName : 'Leon'
});

var users = [];

function add_user(user){
  users.push(user);
}

// Module
var UserModule = (function() {
  var users = [];

  return {
    add : function(user) {
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

// Publish / Subscribe
var UserNotifier = function() {
  var channels = {};

  return {
    publish : function(channel) {
      if (channels[channel] == undefined) {
        return false;
      }

      var subscribers = channels[channel],
      subscribers_length = subscribers.length,
      i;

      var args = Array.prototype.slice.call(arguments, 1);

      for (i = 0; i < subscribers_length; i++) {
        subscribers[i].func.apply(null, args);
      }

      return this;
    },
    subscribe : function(channel, func) {
      if (channels[channel] == undefined) {
        channels[channel] = [];
      }

      var token = channel + "-" + Date.now();

      channels[channel].push({
        token : token,
        func : func
      });

      return token;
    },
    unsubscribe : function(token) {
      for (var c in channels) {
        var channel = channels[c];
        for (var i = 0; i < channel.length; i++) {
          if (channel[i].token === token) {
            channel.splice(i, 1);
            return token;
          }
        }
      }

      return this;
    }
  };
};

// Method chaining

$('#bloque-1').hide().fadeIn('slow').animate({});

function User(attributes) {
  this.email = attributes.email;
  this.nickname = attributes.nickname;
  this.firstName = attributes.firstName;
  this.lastName = attributes.lastName;
}

User.prototype.setNickname = function(nickname) {
  this.nickname = nickname;
  return this;
};

User.prototype.setFirstName = function(firstName) {
  this.firstName = firstName;
  return this;
};

User.prototype.setLastName = function(lastName) {
  this.lastName = lastName;
  return this;
};

User.prototype.save = function() {
  return 'User saved';
};

var user = new User({
  email : 'gustavo@xenda.pe'
});
user.firstName('Gustavo'); // undefined
user.lastName('Leon'); // undefined
user.nickname('hpneo'); // undefined

user.setFirstName('Gustavo').setLastName('Leon').setNickname('hpneo').save();
user.firstName; // "Gustavo"
user.lastName; // "Leon"
user.nickname; // "hpneo"

// Callbacks

window.setTimeout(function(){
  console.log('Hello Vietnam!');
}, 1500);

$.getJSON('/users.json', function(users) {
  console.log(users.length);
});