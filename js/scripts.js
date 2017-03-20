$(function(){

	
	var carouselList = $("#carousel ul");
		larrow = $("#left");
		rarrow = $("#right");

		larrow.on("click", function(){
			carouselList.animate({'marginLeft':-600}, function(){

					$(this).find("li:last").after($(this).find("li:first"));
					$(this).css({marginLeft:0});

				});
		});


		rarrow.on("click", function(){
			carouselList.animate({'marginRight':1200}, function(){

					$(this).find("li:last").after($(this).find("li:first"));
					$(this).css({marginRight:600});

				});
		});


		carouselList.each(function(){
		
			setInterval(function(){

				carouselList.animate({'marginLeft':-600}, 1000, function(){

					$(this).find("li:last").after($(this).find("li:first"));
					$(this).css({marginLeft:0});

				});
			}, 5000);
		});
});
