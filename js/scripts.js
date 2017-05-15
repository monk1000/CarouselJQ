$(function(){
	
	var carouselList = $("#carousel ul");
	var slider = setInterval(function changeSlide(){
	
		carouselList.animate({'marginLeft':-600}, 1000, moveFirstSlide)}, 
	3000);	
		

		function moveFirstSlide(){

			var firstItem = carouselList.find("li:first");
			var lastItem = carouselList.find("li:last");
				
				lastItem.after(firstItem);
				carouselList.css({marginLeft:0});
			};
});

