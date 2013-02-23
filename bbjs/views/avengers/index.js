App.views.AvengersIndex = Backbone.View.extend({
  tagName     : 'div',
  className   : 'avengers-index',

  events : {
    'click #new-avenger' : 'addAvenger'
  },

  addAvenger : function(e) {
    console.log('addAvenger');
    
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

    var output = Mustache.render(template, App.data);

    this.el.innerHTML = output;

    return this.el;
  }
});