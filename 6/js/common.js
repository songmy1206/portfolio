/*GNB*/
$("#menu_btn").click(function(){
    $(".menu").slideToggle(400);
    $(this).toggleClass("menuAni");
});

/*icon2*/
$(".icon2").click(function(){
    $('#contents').animate({width : 'toggle'},400);
});


/*슬라이드*/
var slidIdx = 0;

function slideAuto(){
    $(".back_p>li").removeClass("top");
    $(".back_m>li").removeClass("top");
    slidIdx++;
    var isIndx = slidIdx % 3;
    if(isIndx == 0){
        $(".back_p>li").eq(isIndx).addClass("top");
        $(".back_m>li").eq(isIndx).addClass("top");
    }else if(isIndx == 1){
        $(".back_p>li").eq(isIndx).addClass("top");
        $(".back_m>li").eq(isIndx).addClass("top");
    } else if(isIndx == 2){
        $(".back_p>li").eq(isIndx).addClass("top");
        $(".back_m>li").eq(isIndx).addClass("top");
    }   
}
/*슬라이드 이동*/
function nextFun(){
    $(".back_p>li").removeClass("top");
    $(".back_m>li").removeClass("top");
    slidIdx++;
    var isIndx = slidIdx % 3;
    if(isIndx == 0){
        $(".back_p>li").eq(isIndx).addClass("top");
        $(".back_m>li").eq(isIndx).addClass("top");
    }else if(isIndx == 1){
        $(".back_p>li").eq(isIndx).addClass("top");
        $(".back_m>li").eq(isIndx).addClass("top");
    } else if(isIndx == 2){
        $(".back_p>li").eq(isIndx).addClass("top");
        $(".back_m>li").eq(isIndx).addClass("top");
    }   
}

function prevFun(){
    $(".back_p>li").removeClass("top");
    $(".back_m>li").removeClass("top");
    slidIdx = slidIdx+2;
    var isIndx = slidIdx % 3 ;
    if(isIndx == 0){
        $(".back_p>li").eq(isIndx).addClass("top");
        $(".back_m>li").eq(isIndx).addClass("top");
    }else if(isIndx == 1){
        $(".back_p>li").eq(isIndx).addClass("top");
        $(".back_m>li").eq(isIndx).addClass("top");
    } else if(isIndx == 2){
        $(".back_p>li").eq(isIndx).addClass("top");
        $(".back_m>li").eq(isIndx).addClass("top");
    }   
}

var slideCall = setInterval("slideAuto()",3000);

$("#slideWrap").hover(function(){
    clearInterval(slideCall);
},function(){
    slideCall = setInterval("slideAuto()",3000);
});

$(".s_btn").hover(function(){
    clearInterval(slideCall);
},function(){
    slideCall = setInterval("slideAuto()",3000);
});


/*탭메뉴*/
$(function(){
    $(".btn>div").click(function(){
        $(".btn>div").removeClass("active");
        $(this).addClass("active");

        var idx = $(this).index();
        if(idx == 0){
            $("#tab_contents>form").removeClass("active");
            $("#mypage").addClass("active");
        }else{
            $("#tab_contents>form").removeClass("active");
            $("#mypage2").addClass("active");
        }
    });
});

/*유효성검사*/
$(document).ready(function(){
    $("#mypage").submit(function(){
        var u_id = $("input[name='id']").val();
        if(!u_id){
            $("#noid").fadeIn(100);
            return false;
        }
        var u_pw = $("input[name='pwd']").val();
        if(!u_pw){
            $("#nopwd").fadeIn(100);
            return false;
        }
        if(u_id && u_pw){
            $("#loginsuc").fadeIn(100);
            return false;
        }
    });

    $(".noidbtn").click(function(){
        $("#noid").fadeOut(100);
        $("input[name='id']").focus();
    });
    $(".nopwdbtn").click(function(){
        $("#nopwd").fadeOut(100);
        $("input[name='pwd']").focus();
    });
    $(".sucbtn_l").click(function(){
        $("#loginsuc").fadeOut(100);
        $("#contents").fadeOut(100);
        document.getElementById("ident").value="";
        document.getElementById("pwdent").value="";
    });

    $("#mypage2").submit(function(){
        var u_id = $("input[name='id1']").val();
        if(!u_id){
            $("#noid2").fadeIn(100);
            return false;
        }
        var u_nm = $("input[name='name1']").val();
        if(!u_nm){
            $("#noname1").fadeIn(100);
            return false;
        }
        var u_pw = $("input[name='name2']").val();
        if(!u_pw){
            $("#noname2").fadeIn(100);
            return false;
        }
        var u_pw = $("input[name='pwd1']").val();
        var u_pw2 = $("input[name='pwd2']").val();
        if(!u_pw){
            $("#nopwd1").fadeIn(100);
            return false;
        }
        if(u_pw != u_pw2){
            $("#nopwd2").fadeIn(100);
            return false;
        }
        var u_ok = $("input[name='ok']");
        if(!u_ok.is(":checked")){
            $("#nook").fadeIn(100);
            return false;
        }
        if(u_id && u_nm && u_pw && u_pw2 && u_ok){
        $("#signupsuc").fadeIn(100);
        return false;
    }
    });

    $(".noidbtn2").click(function(){
        $("#noid2").fadeOut(100);
        $("input[name='id1']").focus();
    });
    $(".namebtn1").click(function(){
        $("#noname1").fadeOut(100);
        $("input[name='name1']").focus();
    });
    $(".namebtn2").click(function(){
        $("#noname2").fadeOut(100);
        $("input[name='name2']").focus();
    });
    $(".nopwdbtn1").click(function(){
        $("#nopwd1").fadeOut(100);
        $("input[name='pwd1']").focus();
    });
    $(".nopwdbtn2").click(function(){
        $("#nopwd2").fadeOut(100);
        $("input[name='pwd2']").focus();
    });
    $(".nookbtn").click(function(){
        $("#nook").fadeOut(100);
    });
    $(".sucbtn_s").click(function(){
        $("#signupsuc").fadeOut(100);
        $("#contents").fadeOut(100);
        
        document.getElementById("ident2").value="";
        document.getElementById("nment1").value="";
        document.getElementById("nment2").value="";
        document.getElementById("pwdent1").value="";
        document.getElementById("pwdent2").value="";
    });

    $(".topbtn>p").click(function(){
        window.scrollTo({top:0, behavior:"smooth"});
    });
});
