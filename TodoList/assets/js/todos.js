$("ul").on("click" , "li" , function(){
	
	$(this).toggleClass("completed");	
});

/*
$("span").on("mouseenter", function(){
	$(this).fadeIn("slow",function(){

	});
});

$("span").on("mouseout", function(){
	$(this).fadeOut("slow",function(){

	});
}); */

//deleting todos
$("ul").on('click' ,"span", function(event){
	
	//write in func because js doesnot wait it execute
	$(this).parent().fadeOut(500,function(){

		$(this).remove(); //not using parent we using li 
	});
	
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){

	if(event.which === 13) {
		var text = $(this).val();
		$(this).val("");
		$('ul').append("<li><span ><i class='fas fa-trash-alt delete'></i></span> "+ text +"</li>");
	}
}); 

$(".fa-plus").click(function(){

	$("input").toggleClass("hideInput");
});