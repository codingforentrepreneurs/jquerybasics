	$(document).ready(function(){
		//alert("hello");
	    //$("li a").attr("style", "color:red;");
	    //$(".active a").css("color", "blue");
	    //$("#someId").css("color", "orange");
         //$("li a").attr("class", "newClass");
         $("ul.mainUl li:nth-child(2n)").css("color", "rgb(230, 41, 41)");

         // html tag selector
         //$("p") -- grabs all elements of tag "p"
         //$("h1") -- grabs all elements of tag "h1"
         //$("div") -- grabs all elements of tag "h1"

         // children of html
         //$("p a") -- grabs all sub elements of tag "p" with the tag "a"
         //$("li a")

         // Id Selector
         //assuming <a href='#' id="theId">Hi</>
         //$("#theId")  -- grabs sepcific id

         // Class Selector 
         // grabbing an element's class
         //assuming <a class='someLink' href='#' id="theId1">Hi</>
         //assuming <a class='someLink' href='#' id="theId2">Hi</>
         //assuming <a class='someLink' href='#' id="theId3">Hi</>
         //$(".someLink") -- grabs all elements of class


         // Child selector with class or id
         //$("p a.someClass") -- grabs all sub elements of tag "p" with the tag "a" and class of "someClass"
         //$("p a#someId") -- grabs all sub elements of tag "p" with the tag "a" and an id of "someID"



	});