function smoothScroll(t){$('a[href^="#"]').on("click",function(o){var e=$($(this).attr("href"));e.length&&(o.preventDefault(),$("html, body").animate({scrollTop:e.offset().top},t))})}$(window).load(function(t){}),$(document).ready(function(){function t(){for(;1>e;)$(".typing-text").animate({opacity:"0"},"slow"),$(".typing-text").animate({opacity:"1"},"slow"),e+=1;$(".typing-text").promise().done(function(){$(".typing-text").html("Hey There!!");var t=$(".typing-text"),o=t.html(),e=t.text(),n=o.length,i,a=0;t.text("|"),function l(){var e=Math.round(170*Math.random())+30;i=setTimeout(function(){a++;var e=o.substring(0,a);t.html(e+""),l(),a==n&&(t.html(t.html().slice(0,-1)),clearTimeout(i))},e)}()})}function o(){$(".porflio-piece").each(function(t){setTimeout(function(){$(".porflio-piece").eq(t).addClass("seen")},300*t)})}$("#porflio-piece-1-open").animatedModal(),$("#demo02").animatedModal({modalTarget:"modal-02",animatedIn:"bounceInLeft",animatedOut:"bounceOutLeft",color:"#ffffff"}),o(),smoothScroll(300),$(window).on("scroll",function(){var o=$(window).scrollTop();$("#about-me").offset().top-100<o&&(1==trigger&&t(),trigger+=1)}),trigger=0;var e=0,n=!1;$(".mobile-nav-toggle").on("click",function(){$(".mobile-nav-toggle, .mobile-nav").toggleClass("is-open")})});