var App = {
  routers : {},
  views : {},
  templates : {},
  data : {
    avengers : (function(){
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

    })()
  },
  init : function() {
    for (r in this.routers) {
      // new App.routers['Avengers']();
      new this.routers[r]();
    }

    Backbone.history.start();
  }
};

App.views.AvengersIndex = Backbone.View.extend({
  tagName     : 'ul',
  id          : 'avengers-list',
  className   : 'common-list',

  render : function() {
    /*
    var item_template = "<li>{{avenger_name}}</li>";

    var avengers = window.localStorage['avengers'].split(',');

    for(var i = 0; i < avengers.length; i++) {
      var avenger = avengers[i];

      template += item_template.replace('{{avenger_name}}', avenger);
    }
    */
    var template = $('#avengers-list-template').text();

    var output = Mustache.render(template, App.data);

    this.el.innerHTML = output;

    return this.el;
  }
});

App.views.AvengersShow = Backbone.View.extend({
  tagName     : 'div',
  className   : 'avengers-detail',
  id          : function() {
    if (this.model) {
      return this.model.name.toLowerCase().replace(' ', '-');
    }
  },

  render      : function() {
    var template = $('#avengers-detail-template').text();

    var output = Mustache.render(template, this.model);

    this.el.innerHTML = output;

    return this.el;
  }
});

App.routers.Avengers = Backbone.Router.extend({
  routes : {
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

    for(a in App.data.avengers) {
      if (App.data.avengers[a]['id'] == id) {
        avenger = App.data.avengers[a];
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