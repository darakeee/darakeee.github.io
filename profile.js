$(function(){
    $("h1").textillate({
		loop: false,
		//フェードイン時のアニメーション
		in: {
			effect:'fadeInDown',
			delay: 30,
			
		}
	});

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
			$("#global-navi").animate({'right':rightVal}, 500, function(){
				click=true;
			});
		}
	});
});