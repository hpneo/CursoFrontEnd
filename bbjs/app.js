var App = {
  routers : {},
  views : {},
  models : {},
  collections : {},
  templates : {},
  data : {
    avengers : function(){
      var avengers = window.localStorage['avengers'].split(',');

      var list = [];

      for (var i = 0; i < avengers.length; i++) {
        var avenger_id = avengers[i].toLowerCase().replace(' ', '-');
        list.push({
          id : avenger_id,
          name : avengers[i],
          description : 'Avenger #' + i,
          link : "#avengers/" + avenger_id
        });
      }

      return list;

    }
  },
  init : function() {
    for (r in this.routers) {
      // new App.routers['Avengers']();
      new this.routers[r]();
    }

    Backbone.history.start();
  }
};

App.models.Avenger = Backbone.Model.extend({
  defaults : {
    'status' : 'active'
  },
  validate : function(attrs) {
    if (attrs.id <= 0) {
      return 'Id no puede ser menor o igual a 0';
    }
  }
});

App.collections.Avengers = Backbone.Collection.extend({
  model : App.models.Avenger,
  url : 'users'
});

App.routers.Avengers = Backbone.Router.extend({
  routes : {
    ''             : 'index',
    'avengers'     : 'index',
    'avengers/:id' : 'show'
  },

  index : function() {
    console.log('avengers#index');

    var view = new App.views.AvengersIndex();

    $('#title').text('Avengers');

    $('#wrapper').html(view.render());
  },

  show : function(id) {
    console.log('avengers#show : ' + id);

    var avenger = null;

    var avengers = App.data.avengers();

    for(a in avengers) {
      if (avengers[a]['id'] == id) {
        avenger = avengers[a];
        break;
      }
    }

    var view = new App.views.AvengersShow({
      model : avenger
    });

    $('#wrapper').html(view.render());
  }

});

window.App = App;