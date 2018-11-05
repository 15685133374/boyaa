$(function () {
    $(".gamesBox").find(".content:first").show();
    $(".list-group-item").children("span:first").show();
    $(".list-group-item").click(function () {
        var index=$(this).index();
//      console.log(index);
   		 $(this).children("a").css({"color":" green"
   		 }).parents().siblings().children("a").css({"color":"black"});
        $(this).parents().next().find(".content").hide().eq(index).show();
        // $(this).addClass("span").siblings().removeClass("span");
        $(this).children("span").show().parents().siblings().children("span").hide();

        if(index==0) {
            $(".list-group-item").eq(0).children("a").children("i").css({
                "background-position": "-125px 0"
            });
            $(".list-group-item").eq(1).children("a").children("i").css({
                "background-position": "-4px -97px"
            });
            $(".list-group-item").eq(2).children("a").children("i").css({
                "background-position": "0px -197px"
            });
            $(".list-group-item").eq(3).children("a").children("i").css({
                "background-position": "0px -295px"
            });
            $(".list-group-item").eq(4).children("a").children("i").css({
                "background-position": "-0px -595px"
            })
        }else if(index==1) {
            $(".list-group-item").eq(0).children("a").children("i").css({
                "background-position": "3px 0"
            });
            $(".list-group-item").eq(1).children("a").children("i").css({
                "background-position": "-124px -97px"
            });
            $(".list-group-item").eq(2).children("a").children("i").css({
                "background-position": "0px -197px"
            });
            $(".list-group-item").eq(3).children("a").children("i").css({
                "background-position": "0px -295px"
            });
            $(".list-group-item").eq(4).children("a").children("i").css({
                "background-position": "-0px -595px"
            })
        }else if(index==2) {
            $(".list-group-item").eq(0).children("a").children("i").css({
                "background-position": "3px 0"
            });
            $(".list-group-item").eq(1).children("a").children("i").css({
                "background-position": "-4px -97px"
            });
            $(".list-group-item").eq(2).children("a").children("i").css({
                "background-position": "-120px -197px"
            });
            $(".list-group-item").eq(3).children("a").children("i").css({
                "background-position": "0px -295px"
            });
            $(".list-group-item").eq(4).children("a").children("i").css({
                "background-position": "-0px -595px"
            })
        }else if(index==3) {
            $(".list-group-item").eq(0).children("a").children("i").css({
                "background-position": "3px 0"
            });
            $(".list-group-item").eq(1).children("a").children("i").css({
                "background-position": "-4px -97px"
            });
            $(".list-group-item").eq(2).children("a").children("i").css({
                "background-position": "0px -197px"
            });
            $(".list-group-item").eq(3).children("a").children("i").css({
                "background-position": "-120px -295px"
            });
            $(".list-group-item").eq(4).children("a").children("i").css({
                "background-position": "-0px -595px"
            })
        }else if(index==4) {
            $(".list-group-item").eq(0).children("a").children("i").css({
                "background-position": "3px 0"
            });
            $(".list-group-item").eq(1).children("a").children("i").css({
                "background-position": "-4px -97px"
            });
            $(".list-group-item").eq(2).children("a").children("i").css({
                "background-position": "0px -197px"
            });
            $(".list-group-item").eq(3).children("a").children("i").css({
                "background-position": "0px -295px"
            });
            $(".list-group-item").eq(4).children("a").children("i").css({
                "background-position": "-42px -595px"
            })
        }
    })
})

