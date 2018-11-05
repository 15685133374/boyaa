/**
 * Created by Administrator on 2018/10/18.
 */

$(function(){
    var index = 0;
    var imgLength = $(".margin").length;
//				 console.log(imgLength)
    var timer;


    $(".circle li").mouseenter(function(){
        index = $(this).index();
        // console.log(index)
        move()
    })
    $(".box").hover(function(){
        clearInterval( timer )
    },function(){
        autoPlay()
    })


    autoPlay()
    function autoPlay(){
        timer = setInterval(function(){
            index++
            move()
        },2000)
    }

    function move(){
        // ����ұ߽�
        if( index >= imgLength ){
            $(".margin").css({
                "left":"0"
            })
            index = 1
        }
        // �����߽�
        if( index <= -1 ){
            $(".margin").css({
                "left": - $(".margin img").width() * (imgLength-1)
            })
            index = imgLength - 1
        }

        $(".slide").stop().animate({
            "left": - index * $(".margin img").width()
        },1000)

        // �ж�СԲ��ı߽�
        if( index == imgLength-1 ){
            $(".circle li").eq(0).addClass("active").siblings().removeClass()
        }
        // ���СԲ����ʽ
        $(".circle li").eq(index).addClass("active").siblings().removeClass()

    }
})

/**
 * Created by Administrator on 2018/10/18.
 */
