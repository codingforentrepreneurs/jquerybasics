	$(document).ready(function(){
		
		$(".site-wrapper").fadeIn({
			"duration": 200,
			//"easing": "easeInBounce",

		});
		$(".defaultLink").click(function(event){
			event.preventDefault();
			//$("p.lead").fadeOut(6000);
			//$("li:nth-child(2) a").fadeOut(400);
		});
		$("#features").click(function(event){
			event.preventDefault();
			$(".main-content").fadeToggle("fast", function(){
				$(this).html("<h1>Features</h1>");
			}).fadeToggle("fast");
			//$("li:nth-child(2) a").fadeOut(400);
		});

		$("#contact").click(function(event){
			event.preventDefault();
			$(".main-content").fadeToggle("fast", function(){
				$(this).html("<h1>Contact Us</h1>");
			}).fadeToggle("fast");
			//$("li:nth-child(2) a").fadeOut(400);
		});


	});