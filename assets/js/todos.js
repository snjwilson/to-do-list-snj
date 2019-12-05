//for producing line through text decoration on an li that is clicked
$("ul").on("click","li",function(){
	//if color is black
	// 		make it gray and line through
	//else
	// 		make it black and no line through


	/*this is one method of doing it
	if ($(this).css("color")=="rgb(0, 0, 0)"){
		$(this).css("color","red");
		$(this).css("text-Decoration","line-through");
	}
	else{
		$(this).css({
			color : "black",
			textDecoration : "none"
		})
	}
	*/

	//This is the second method this is more easier and uses toggleClass
	$(this).toggleClass("completed");

});
/*
//delete an li when the X span is clicked
$("span").click(function(event){
	alert("span clicked!");
	//$(this).parent().fadeOut()
});

$("li").click(function(){
	alert("LI clicked!");
});

$("body").click(function(){
	alert("body clicked!");
});

*/

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	event.stopPropagation();

});

//now we need to look for input and how to addd the new todo
$("input[type='text']").keypress(function(event){
	if (event.which===13){
		var str = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+str+"</li>");
	}
});

$(".fa-angle-double-down").click(function(){
	$("input[type='text']").fadeToggle();

});
























