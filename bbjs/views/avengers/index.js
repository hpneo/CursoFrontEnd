App.views.AvengersIndex = Backbone.View.extend({
  tagName     : 'div',
  className   : 'avengers-index',

  events : {
    'click #new-avenger' : 'addAvenger'
  },

  addAvenger : function(e) {
    var name = prompt('Nombre de Avenger:');

    if (name) {
      if (window.localStorage['avengers']) {
        window.localStorage['avengers'] += ',' + name;
      }
      else {
        window.localStorage['avengers'] = name;
      }
    }

    this.render();

    return false;
  },

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

    var output = Mustache.render(template, { avengers : App.data.avengers() });

    this.el.innerHTML = output;

    return this.el;
  }
});