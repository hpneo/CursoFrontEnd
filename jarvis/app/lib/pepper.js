var Pepper = (function() {
  return {
    find : function(id) {
      return document.getElementById(id);
    },
    create : function(tagName, innerHTML, attributes) {
      var new_element = document.createElement(tagName);
      new_element.innerHTML = innerHTML;

      for (a in attributes) {
        new_element.setAttribute(a, attributes[a]);
      }

      return new_element;
    }
  };
})();