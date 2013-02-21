var App = {
  routers : {},
  views : {},
  templates : {},
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
    var template = "{{#avengers}}\
    <li>{{.}}</li>\
    {{/avengers}}";

    var data = {
      avengers : window.localStorage['avengers'].split(',')
    };

    var output = Mustache.render(template, data);

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

    $('#wrapper').html(view.render());
  },

  show : function(id) {
    console.log('avengers#show : ' + id);
  }


});

window.App = App;