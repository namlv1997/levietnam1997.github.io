$(document).ready(function() {
    $('i').hide();
  })
  
  $(window).load(function() {
    $('i').show();
  
    var githubPos = $('#github').position();
    var stackPos = $('#stack').position();
    var linkedinPos = $('#linkedin').position();
    var codePos = $('#code').position();

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
      
      $('#stack').animate({
        top: stackPos.top + 10,
        left: stackPos.left - 3
      }, 500);
    }, 750);
    
    setTimeout(function() {
      $('#stack').animate({
        top: stackPos.top,
        left: stackPos.left
      }, 250);
      
      $('#linkedin').animate({
        top: linkedinPos.top + 10,
        left: linkedinPos.left
      }, 500);
    }, 1000);
    
    setTimeout(function() {
      $('#linkedin').animate({
        top: linkedinPos.top,
        left: linkedinPos.left
      }, 250);
      
      $('#code').animate({
        top: codePos.top + 10,
        left: codePos.left + 3
      }, 500);
    }, 1250);
    
    setTimeout(function() {
      $('#code').animate({
        top: codePos.top,
        left: codePos.left
      }, 250);
    },2000);
      
      
  })