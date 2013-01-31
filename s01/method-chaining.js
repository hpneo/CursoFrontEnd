// jQuery
$('#alert-message').hide().appendTo($('body')).fadeIn('slow');

// Lazy loading : No traer información hasta que sea explícitamente requerido
Task.where('project_id', 10).where('user_id', 2).load(function(users) {
  UserView.updateList(users);
});