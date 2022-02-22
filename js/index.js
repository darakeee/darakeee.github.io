$(function(){
	var click=true;
    $(".btn-navi").on("click", function(){
		var rightVal = 0;
		if(click){
			//menuボタンを押したときの動作
			if($(this).hasClass("open")){
				$(this).removeClass("open");
				rightVal = -300;
			}
			else{
				$(this).addClass("open");
			}

			click=false;
			$("#global-navi").animate({"right":rightVal}, 500, function(){
				click=true;
			});
		}
	});
});