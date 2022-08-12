/*gnb*/
$(document).ready(function(){
	$(".main_menu>li").hover(function(){
		$(this).children(".sub_menu").stop().slideDown(400);
	}, function(){
		$(".sub_menu").stop().slideUp(400);
	});
});

/*slide*/
function nextFun(){
	$(".slideWrap").append($(".slideWrap>li").first().clone());
	$(".slideWrap>li").first().remove();
}

var timer = setInterval(function(){nextFun()},2000);
$("#slide").hover(function(){
	clearInterval(timer);
}, function(){
	timer = setInterval(function(){nextFun()},2000);
});

function prevFun(){
	$(".slideWrap").prepend($(".slideWrap>li").last().clone());
	$(".slideWrap>li").last().remove();
}

/*text*/
$(document).ready(function(){
	$(".main_text").fadeIn(1000);
});

$(document).ready(function(){
	setTimeout(function(){
		$(".sub_text").fadeIn(400);
	},1000);
});

/*button*/
$(".main_menu>li").hover(function(){
	$(this).children(".sub_menu").stop().slideDown(400);
}, function(){
	$(this).children(".sub_menu").stop().slideUp(200);
});
$("#menu_btn").click(function(){
	$(".main_menu").fadeToggle(200);
	$(this).toggleClass("menuAni");
});
		
