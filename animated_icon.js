$(document).ready(function() {
    $('i').hide();
  })
  
  $(window).load(function() {
    $('i').show();
  
    var githubPos = $('#github').position();
    var facebookPos = $('#facebook').position();
    var avatarPos = $('.my-avatar').position();
    
    $('i').css({
      display:'inline',
      position: 'absolute',
      zIndex: '1',
      top: avatarPos.top + 100,
      left: '47%'
    });
    
    setTimeout(function() {
      $('#github').animate({
        top: githubPos.top + 10,
        left: githubPos.left - 10
      }, 500);
    }, 250);

    setTimeout(function() {
      $('#github').animate({
        top: githubPos.top,
        left: githubPos.left
      }, 250);
      
      $('#facebook').animate({
        top: facebookPos.top + 10,
        left: facebookPos.left - 3
      }, 500);
    }, 750);
    
    
    setTimeout(function() {
      $('#facebook').animate({
        top: facebookPos.top,
        left: facebookPos.left
      }, 250);
    },2000);
      
      
  })