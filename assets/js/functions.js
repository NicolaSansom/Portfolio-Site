
$( document ).ready(function() {


  var blinks = 0;
  var timetotype = false;

  while (blinks < 1) {
  $('.typing-text').animate({"opacity": "0"}, "slow");
  $('.typing-text').animate({"opacity": "1"}, "slow");
  blinks = blinks + 1;
  }
  $('.typing-text').promise().done(function(){
    $('.typing-text').html("Hello There!!");
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












    $('.mobile-nav-toggle').on('click', function() {
       $(".mobile-nav-toggle, .mobile-nav").toggleClass("is-open");
    });
});
