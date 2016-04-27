
if (navigator.userAgent.match(/msie|trident/i) ){
  $('html').removeClass('flexbox').addClass('no-flexbox');
}

// Smooth Scroll between the different sections
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}


$( document ).ready(function() {

	// Loading screen
	var fadeintrigger = 0;
	$('#page-content').imagesLoaded( function(){
	  $('#preloader').fadeOut("slow");
		var fadeintrigger = 1;
		if (fadeintrigger == 1) {
			startpieces();
		}
	});

	//Opening trigger for opening portflios pieces
	$("#portfolio-piece-1-open").animatedModal({
	    modalTarget:'piece1',
	    animatedIn:'bounceInLeft',
	    animatedOut:'bounceOutLeft',
	    color:'#ffffff'
	});

	$("#portfolio-piece-2-open").animatedModal({
	    modalTarget:'piece2',
	    animatedIn:'bounceInLeft',
	    animatedOut:'bounceOutLeft',
	    color:'#ffffff'
	});


	$("#portfolio-piece-3-open").animatedModal({
			modalTarget:'piece3',
			animatedIn:'bounceInLeft',
			animatedOut:'bounceOutLeft',
			color:'#ffffff'
	});


		$("#portfolio-piece-4-open").animatedModal({
				modalTarget:'piece4',
				animatedIn:'bounceInLeft',
				animatedOut:'bounceOutLeft',
				color:'#ffffff'
		});

	$("#portfolio-piece-5-open").animatedModal({
			modalTarget:'piece5',
			animatedIn:'bounceInLeft',
			animatedOut:'bounceOutLeft',
			color:'#ffffff'
	});

	$("#portfolio-piece-6-open").animatedModal({
			modalTarget:'piece6',
			animatedIn:'bounceInLeft',
			animatedOut:'bounceOutLeft',
			color:'#ffffff'
	});

	$("#portfolio-piece-7-open").animatedModal({
			modalTarget:'piece7',
			animatedIn:'bounceInLeft',
			animatedOut:'bounceOutLeft',
			color:'#ffffff'
	});

	$("#portfolio-piece-8-open").animatedModal({
			modalTarget:'piece8',
			animatedIn:'bounceInLeft',
			animatedOut:'bounceOutLeft',
			color:'#ffffff'
	});



	//Calling smooth scroll function
  smoothScroll(300);
	$(window).on('scroll', function() {
	//Trigger the hi text in about me section
	var wScroll = $(window).scrollTop();
	if($('#about-me').offset().top - 100 < wScroll) {
		if(trigger ==1 ){
		text();}
		trigger = trigger + 1;

	}

	});
	// For the text animation
	trigger = 0;
  var blinks = 0;

	function text() {
  while (blinks < 1) {
  $('.typing-text').animate({"opacity": "0"}, "slow");
  $('.typing-text').animate({"opacity": "1"}, "slow");
  blinks = blinks + 1;
  }

  $('.typing-text').promise().done(function(){
    $('.typing-text').html("Hey There!!");
    var $el = $('.typing-text'),
    html = $el.html(),
    txt = $el.text(),
    txtLen = html.length,
    timeOut,
    char = 0;

$el.text('|');

(function typeIt() {
    var humanize = Math.round(Math.random() * (200 - 30)) + 30;
    timeOut = setTimeout(function() {
        char++;
        var type = html.substring(0, char);
        $el.html(type + '');
        typeIt();

        if (char == txtLen) {
            $el.html($el.html().slice(0, -1)); // remove the '|'
            clearTimeout(timeOut);
        }

    }, humanize);
}());


  });
}


    $('.mobile-nav-toggle').on('click', function() {
       $(".mobile-nav-toggle, .mobile-nav").toggleClass("is-open");
    });

// fade in all selected work after full load

function startpieces(){

		$('.portfolio-piece').each(function(i) {
			setTimeout(function(){
				$('.portfolio-piece').eq(i).addClass('seen');
			}, 300 * i);

		});

}

});
