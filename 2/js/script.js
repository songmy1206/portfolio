/*gnb*/
$(document).ready(function(){
	$(".menu>li").hover(function(){
		$(this).children(".submenu").stop().slideDown(400);
	}, function(){
		$(".submenu").stop().slideUp(400);
	});
});

/*slide
var Slideshow = setInterval(function(){
	$(".slideWrap").animate({
		"margin-left" : "-1440px"
	},function(){
		$(".slideWrap>li:first-child").appendTo(".slideWrap");
		$(".slideWrap").css("margin-left", "0");
	});
},3000);	

/*next
function nextFun(){
	$(".slideWrap").append($(".slideWrap>li").first().clone());
	$(".slideWrap>li").first().remove();
}

/*prev
function prevFun(){
	$(".slideWrap").prepend($(".slideWrap>li").last().clone());
	$(".slideWrap>li").last().remove();
}

/*hover_stop
$(".slideWrap").hover(function(){
	clearInterval(Slideshow);
	},function(){
		Slideshow = setInterval(function(){
		$(".slideWrap").animate({
			"margin-left" : "-1440px"
		},function(){
			$(".slideWrap>li:first-child").appendTo(".slideWrap");
			$(".slideWrap").css("margin-left", "0");
		});
	},3000);			
});*/


/*슬라이드*/
var slidIdx = 0;

function slideAuto(){
    $(".back_p>li").removeClass("top");
    slidIdx++;
    var isIndx = slidIdx % 3;
    if(isIndx == 0){
        $(".back_p>li").eq(isIndx).addClass("top");
    }else if(isIndx == 1){
        $(".back_p>li").eq(isIndx).addClass("top");
    } else if(isIndx == 2){
        $(".back_p>li").eq(isIndx).addClass("top");
    }   
}
/*슬라이드 이동*/
function nextFun(){
    $(".back_p>li").removeClass("top");
    slidIdx++;
    var isIndx = slidIdx % 3;
    if(isIndx == 0){
        $(".back_p>li").eq(isIndx).addClass("top");
    }else if(isIndx == 1){
        $(".back_p>li").eq(isIndx).addClass("top");
    } else if(isIndx == 2){
        $(".back_p>li").eq(isIndx).addClass("top");
    }   
}

function prevFun(){
    $(".back_p>li").removeClass("top");
    slidIdx = slidIdx+2;
    var isIndx = slidIdx % 3 ;
    if(isIndx == 0){
        $(".back_p>li").eq(isIndx).addClass("top");
    }else if(isIndx == 1){
        $(".back_p>li").eq(isIndx).addClass("top");
    } else if(isIndx == 2){
        $(".back_p>li").eq(isIndx).addClass("top");
    }   
}

var slideCall = setInterval("slideAuto()",3000);

$(".back_p").hover(function(){
    clearInterval(slideCall);
},function(){
    slideCall = setInterval("slideAuto()",3000);
});

$(".s_btn").hover(function(){
    clearInterval(slideCall);
},function(){
    slideCall = setInterval("slideAuto()",3000);
});



/*thumbs*/
$(".bg2>ul>li").hover(function(){

	var idx = $(this).index(); // 이래하면 해당 li의 인덱스 값이 idx 변수에 들어 가게됩니다.

	//alert(idx); // 잘 되고있는지 얼럿창으로 출력해서 함 봅시다.
	// 인덱스값 잘 출력되고있져? 이렇게 가져오는인덱스 값을 활용하려면
	// 배경으로 들어갈 이미지의 파일명 또한 규치적으로 변경되어 있어야 합니다.
	// 배경 파일 열어서 확인한번 하겠ㅅ습니다. 저기 focus_1.png 얘들인가여? 네

	// 순서대로 잘 써주셔서 저거 이제 우리 가져다 쓰면 됩ㄴ디ㅏ..
	// 근데 사용자가 아는 숫자는 우리가 아는 인덱스값이랑 다르고 
	// 우리도 저 순서를 첫번째이미지 두번째 이미지 이르케 해놨자나여? 그럼 인제 쟤들...그르니까 idx 값을 그대로 쓰면 아니되고.. (idx+1) 이르케 해줘야~!? 해당 ㅏ이미지가 들어가게 되겠죠..?

	$(this).parents(".bg1").css("background","url(./images/focus_"+(idx+1)+".png) ");
	// 여기서 말하는 this는 마우스가 올려진 li잖아요!? 그거의 조상중에서!!(parents) s가 붙어서 조상이에요 parent면 바로 위 부모요소를 선택하는거구요. s가 붙어서 조상인지라 그중에 하나를 선택해줘야 하는데 디게 많잖아요 복수니까네... 그래서 .bg1 이라는 클래스를 정확하게 작성 해준거에요.
	// $(this).parents(".bg1") :: 여기까지는 사용자가 마우스를올린 li의 부모요소 중 bg1 까지 선택을 한거죠.
	// $(간략히bg1클래스)..css("background","url(./images/focus_"+(idx+1)+".png) ");.. 선택한걔(bg1클래스)에 배경을 넣어줍니당 이게 끝이구요. (idx+1) 은 위에서 설명 했듯 인덱스값 가져왔는데 이걸 첫번째~~ 등으로 쓰기위해서! +1을 해준상태입니다!!
	// 한번 더 천천히 코드 보시고 이해안가시면 말씀해주세요~~ 더있나요!? 아뇨 감사합니다!!넵 끝!

	// 이거 경로 쓸때 주의하셔야할 사항이 잇습니다. css로 넣잖아요>? 그럼 인라인 스타일로 들어가기 때문에 태그에 ㄴstyle="어쩌구.." 이런형태로 쓰여서 경로가 ../ 상위폴더 아니고 ./현재폴더에서 내려가야합니다. 이르케 변하는 인덱스값 기준으로 해서 +1 해주고~~ 걔를 배경 경로로 사용하면 됩니다! 앗 ㅋㅋ...감사합니다 어머세상에 확장자를 안썼어요ㅣ..
	// 그리고 아예 로딩되자마자 보이는 이미지 1개를 미리 만들어서 . css에넣어 두고 시작 하시면 편할거에요 그르니가네

},function(){

	$(this).parents(".bg1").css("background","url(./images/focus_0.png) "); // 떠나면 그냥 원래 로딩되었을때 이미지인 0번 보여주면 됩니다. 그냥 여긴 배경ㅅ ㅐㄱ만 넣어둘게여 이해하셨을까여!? 네,,, 안어렵죠..? 좀 복잡한거같기두,, ㅍㅍ코드 자체만 보면 짧아여.. 흑흑 한번 그 메소드 한번만 더 설명 해둘게여
});