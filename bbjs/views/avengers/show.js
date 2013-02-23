App.views.AvengersShow = Backbone.View.extend({
  tagName     : 'div',
  className   : 'avengers-show',
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