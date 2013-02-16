window.Jarvis = {
  avengers : (function() {
    var storage = window.localStorage;

    return {

      list : function() {
        var avengers = storage['avengers'].split(',');

        return avengers;
      },

      add : function(avenger) {
        if (storage['avengers']) {
          storage['avengers'] = storage['avengers'] + ',' + avenger;
        }
        else {
          storage['avengers'] = avenger;
        }

        var avengers_list = Pepper.find('avengers-list');

        var avenger_item = Pepper.create('li', avenger, {
          id : avenger.toLowerCase().replace(' ', '-')
        });

        avengers_list.appendChild(avenger_item);
      },
      clear : function() {
        storage.removeItem('avengers');
      },
      remove : function(avenger) {

        var avengers = storage['avengers'].split(',');

        for(var i = 0; i < avengers.length; i++) {
          if(avengers[i] == avenger) {
            avengers.splice(i, 1);
            break;
          }
        }

        console.log(avengers);
        storage['avengers'] = avengers.join(',');

        var avenger_item = Pepper.find(avenger.toLowerCase().replace(' ', '-'));
        avenger_item.parentNode.removeChild(avenger_item);
      }

    }
  })(),

  route : function(hash) {
    var hash = hash.replace('#!/', '');

    var schema_array = hash.split('/');

    var schema = {
      resource : schema_array[0],
      id : schema_array[1]
    };

    return schema;
  }
};