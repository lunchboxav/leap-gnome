// Do div highlighting and window focusing
// Do item popup


$(document).ready(function($) {
  //init popup first
  //Pop up
  $('#video-player').magnificPopup({
    items: {
      src: 'http://www.youtube.com/watch?v=uvEV4kR8mIk'
    },
    type: 'iframe'
  });
  
  $('.image-popup-vertical-fit').magnificPopup({
	type: 'image',
	image: {
	  verticalFit: true
	}
  });

  // focus function
  var $container = $('.packery').packery();

  $container.on( 'click', '.item', function( event ) {
    // change size of item via class
    $( event.target ).toggleClass('gigante');
    // trigger layout
    $container.packery();
    console.log("berubah");
  });

  var optionCounter = 0;
  $(document).keydown(function(e) {
	if (e.ctrlKey && e.altKey && ( e.which == 73)) {
		optionCounter++;
		console.log(optionCounter);
	}
	else if (e.ctrlKey && e.altKey && ( e.which == 89)) {
		optionCounter--;
		console.log(optionCounter);
	}
	
	if (optionCounter == 1) {
	  $(window).scrollTo($('#news'),800);          
	  $('#news').css("opacity","1.0");
	  $('#news').siblings().css("opacity","0.2");
	}
	else if (optionCounter == 2) {
	  $(window).scrollTo($('#video-player'),800);          
	  $('#video-player').css("opacity","1.0");
	  $('#video-player').siblings().css("opacity","0.2");
	  if (e.which == 32) {
		$('#video-player').magnificPopup('open');
	  }
	}
	else if (optionCounter == 3) {
	  $(window).scrollTo($('#twitter-tl'),800);          
	  $('#twitter-tl').css("opacity","1.0");
	  $('#twitter-tl').siblings().css("opacity","0.2");
	}
	else if (optionCounter == 4) {
	  $(window).scrollTo($('#image-gallery'),800);
	  $('#image-gallery').css("opacity","1.0");
	  $('#image-gallery').siblings().css("opacity","0.2");
	  if (e.which == 32) {
		$('.image-popup-vertical-fit').magnificPopup('open');
	  }
	}
	else if (optionCounter == 5) {
	  $(window).scrollTo($('#note-container'),800);
	  $('#note-container').css("opacity","1.0");
	  $('#note-container').siblings().css("opacity","0.2");
	}
	else if (optionCounter == 6) {
	  $(window).scrollTo($('#todo'),800);
	  $('#todo').css("opacity","1.0");
	  $('#todo').siblings().css("opacity","0.2");
	}
	else if (optionCounter == 7) {
	  $(window).scrollTo($('#weather-info'),800);
	  $('#weather-info').css("opacity","1.0");
	  $('#weather-info').siblings().css("opacity","0.2");
	}
	else if (optionCounter == 8) {
	  $(window).scrollTo($('#exchange-rate-info'),800);
	  $('#exchange-rate-info').css("opacity","1.0");
	  $('#exchange-rate-info').siblings().css("opacity","0.2");
	}
	else {
	  $('#news').css("opacity","1.0");
	  $('#video-player').css("opacity","1.0");
	  $('#twitter-tl').css("opacity","1.0");
	  $('#exchange-rate-info').css("opacity","1.0");
	  $('#weather-info').css("opacity","1.0");
	  $('#note-container').css("opacity","1.0");
	  $('#todo').css("opacity","1.0");
	  $('#image-gallery').css("opacity","1.0");
	}
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