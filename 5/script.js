
$(document).ready(function(){
	$("#gnb>ul>li").hover(function(){
		$(this).children(".submenu").stop().slideDown(400);
	}, function(){
		$(".submenu").stop().slideUp(400);
	});
});



/*hover*/
var slideCall = setInterval("slideAuto()",3000);

$(".slideWrap").hover(function(){
    clearInterval(slideCall);
},function(){
    slideCall = setInterval("slideAuto()",3000);
});

/**/
var slidIdx = 0;

function slideAuto(){
    $(".back>li").removeClass("top");
    slidIdx++;
    var isIndx = slidIdx % 3;
    if(isIndx == 0){
        $(".back>li").eq(isIndx).addClass("top");
    }else if(isIndx == 1){
        $(".back>li").eq(isIndx).addClass("top");
    } else if(isIndx == 2){
        $(".back>li").eq(isIndx).addClass("top");
    }   
}