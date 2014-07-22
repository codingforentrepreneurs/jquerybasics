	$(document).ready(function(){
		$(".defaultLink").click(function(event){
			event.preventDefault();
			//alert("prevented default");
			console.log($(".active a").css("color"));
			$the_white_color = "rgb(255, 255, 255)"
			if($(".active a").css("color") == $the_white_color){
				$(".active a").css("color", "red");
			} else {
				$(".active a").css("color", $the_white_color);
			}
			
		})

	});