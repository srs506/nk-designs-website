$(document).ready(function() {
  var _content = $('#mainContent')
  var _container = $('#container')
  
  _content.hide();
  
  _container.imagesLoaded( function() {
    _content.fadeIn();
    
    _container.masonry({
      itemSelector : '.item',
      isFitWidth: true
    });
  });
});