(function ($) {
     
"use strict"; 
 /* ---------------------------------------------
 counterUp
 --------------------------------------------- */

if($(".skill_countdown").length>0)
{
	$(".skill_countdown").counterUp({
	    delay: 10,
	    time: 700,
	});
	 
	$('.counts').counterUp({
	    time: 1400,
	});
}





})(jQuery);
