$(document).ready(function() {
    $('i').hide();
  })
  
  $(window).load(function() {
    $('i').show();
  
    var githubPos = $('#github').position();
    var stackPos = $('#facebook').position();
    var imgPos = $('.my-avatar').position();
    
    $('i').css({
      position: 'absolute',
      zIndex: '1',
      top: imgPos.top + 100,
      left: '47%'
    });
    
    setTimeout(function() {
      $('#github').animate({
        top: twitterPos.top + 10,
        left: twitterPos.left - 10
      }, 500);
    }, 250);

    setTimeout(function() {
      $('#github').animate({
        top: githubPos.top,
        left: githubPos.left
      }, 250);
      
      $('#facebook').animate({
        top: stackPos.top + 10,
        left: stackPos.left - 3
      }, 500);
    }, 750);
    
    
    setTimeout(function() {
      $('#facebook').animate({
        top: codePos.top,
        left: codePos.left
      }, 250);
    },2000);
      
      
  })