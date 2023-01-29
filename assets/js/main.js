$(document) .ready(function(){
	// sticky menu add using scroll
	$(window) .scroll(function(){
		const scroll = $(window) .scrollTop();
		console.log(scroll);
		if (scroll > 0) {
			$(".header-area") .addClass("sticky");

		}else{
			$(".header-area") .removeClass("sticky");
		}

	});
});