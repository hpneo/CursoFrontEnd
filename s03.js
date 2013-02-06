if ('localStorage' in window) {
  var storage = window.localStorage;

  storage['avengers'] = ['Iron Man', 'Captain America', 'Thor', 'The Hulk'];

  storage.setItem('teams', "The Avengers, New Avengers, Dark Avengers, Mighty Avengers, Young Avengers");

  storage.getItem('avengers');
  storage['teams'];
}

document.body.addEventListener('offline', function() {
  console.log('Offline mode on');
  startOfflineMode();
});
document.body.addEventListener('online', function() {
  console.log('Online again!');
  syncOfflineChanges();
});
