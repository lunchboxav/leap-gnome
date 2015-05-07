// Do div highlighting and window focusing
// Do item popup

$(document).ready(function($) {
  // focus function
  var $container = $('.packery').packery();
  var optionCounter = 0;
  
  // $container.focus();
  
  function applyGigante($target) {
    var isGigante = $target.hasClass('gigante');
    $target.toggleClass('gigante');

    if ( isGigante ) {
      // if shrinking, just layout
      $container.packery();
      $(window).scrollTo($target,800);  
    } else {
      $container.packery( 'fit', $target[0] );
      $(window).scrollTo($target,800);  
    }
  }
  
  
  function doHighlight() {
    $item = $(itemList[optionCounter]);
    $(window).scrollTo($item,800);          
    $item.css("opacity","1.0");
    $item.siblings().css("opacity","0.2");
  }
  
  // highlight function
  var optionCounter = 0;
  var itemList = ['#news','#video-player','#twitter-tl','#image-gallery','#todo','#note-container','#weather-info','#exchange-rate-info','#terminal-emulation'];
  $(document).keyup(function(e) {
    
    $item = $(itemList[optionCounter]);

    if (e.ctrlKey && e.altKey && ( e.which == 73)) {
      optionCounter++;
      if(optionCounter>itemList.length-1)
        optionCounter=0; 
      console.log(optionCounter);
      doHighlight();
    }
    else if (e.ctrlKey && e.altKey && ( e.which == 89)) {
      optionCounter--;
      if(optionCounter<0)
        optionCounter=itemList.length-1;
      console.log(optionCounter);
      doHighlight();
    }
    else if (e.ctrlKey && e.altKey && ( e.which == 32)) {
      applyGigante($item);
      return;
    }
   
    /* else {
      $('#news').css("opacity","1.0");
      $('#video-player').css("opacity","1.0");
      $('#twitter-tl').css("opacity","1.0");
      $('#exchange-rate-info').css("opacity","1.0");
      $('#weather-info').css("opacity","1.0");
      $('#note-container').css("opacity","1.0");
      $('#todo').css("opacity","1.0");
      $('#image-gallery').css("opacity","1.0");
    } */
  });
});

//Hover Highlight 
/*
$(".item").hover(highlight, noHighlight);
});

function highlight() {
$(this).siblings().css("opacity","0.5");
}

function noHighlight() {
$(this).siblings().css("opacity","1.0");
}
*/
