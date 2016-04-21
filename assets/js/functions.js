


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

$(window).load(function(e) {



});

$( document ).ready(function() {
		var fadeintrigger = 0;
	$('#container').imagesLoaded( function(){
	  $('#preloader').fadeOut("slow");
		var fadeintrigger = 1;
		if (fadeintrigger == 1) {
			startpieces();
		}


	  /* other stuff... */
	});



	$("#porflio-piece-1-open").animatedModal();
	$("#demo02").animatedModal({
	    modalTarget:'modal-02',
	    animatedIn:'bounceInLeft',
	    animatedOut:'bounceOutLeft',
	    color:'#ffffff'
	});

	$("#porflio-piece-3-open").animatedModal({
			modalTarget:'piece3',
			animatedIn:'bounceInLeft',
			animatedOut:'bounceOutLeft',
			color:'#ffffff'
	});



  smoothScroll(300);
	$(window).on('scroll', function() {

	var wScroll = $(window).scrollTop();
	if($('#about-me').offset().top - 100 < wScroll) {
		if(trigger ==1 ){
		text();}
		trigger = trigger + 1;

	}



	});
	trigger = 0;

  var blinks = 0;
  var timetotype = false;

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

// fade in selected work

function startpieces(){

		$('.porflio-piece').each(function(i) {
			setTimeout(function(){
				$('.porflio-piece').eq(i).addClass('seen');
			}, 300 * i);

		});

}

});
