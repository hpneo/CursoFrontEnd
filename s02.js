window.onload = function() {
  function perform_transition (e) {
    e.preventDefault();

    var element_id = this.id.replace('transition-', '');
    var element = document.getElementById(element_id);

    var property = element.attributes['data-property'].value;

    var new_property_value = prompt('Nuevo valor para ' + property + ':');

    element.style[property] = new_property_value;
  };

  function perform_transformation (e) {
    e.preventDefault();

    var element_id = this.id.replace('transformation-', '');
    var element = document.getElementById(element_id);

    var property = element.attributes['data-property'].value;

    var new_property_value = prompt('Nuevo valor para ' + property + ':');

    element.style['-webkit-transform'] = property + '(' + new_property_value + ')';
  }

  document.getElementById('transition-background').onclick = perform_transition;
  document.getElementById('transition-font-size').onclick = perform_transition;
  document.getElementById('transition-text-indent').onclick = perform_transition;
  document.getElementById('transition-width').onclick = perform_transition;

  document.getElementById('transformation-rotate').onclick = perform_transformation;
  document.getElementById('transformation-translate').onclick = perform_transformation;
  document.getElementById('transformation-scale').onclick = perform_transformation;
  document.getElementById('transformation-skewX').onclick = perform_transformation;

  document.getElementById('start-animation').onclick = function (e) {
    e.preventDefault();

    document.getElementById('animation-1').style.webkitAnimationPlayState = 'running';
  };

  document.getElementById('pause-animation').onclick = function (e) {
    e.preventDefault();

    document.getElementById('animation-1').style.webkitAnimationPlayState = 'paused';
  };
};