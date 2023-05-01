$(function hide() {
    $(".first").show()
    $(".second").hide()
    $(".third").hide()
})

$(function show(){
    $(".firstone").click(function(){
        $(".first").fadeIn(2000)
        $(".second").hide(1000)
        $(".third").hide(1000)
    })
    $(".secondone").click(function(){
        $(".first").hide(1000)
        $(".second").fadeIn(2000)
        $(".third").hide(1000)
    })
    $(".thirdone").click(function(){
        $(".first").hide(1000)
        $(".second").hide(1000)
        $(".third").fadeIn(2000)
    })
})


// $(function showabout(){
//     $("#aboutus").click(function(){
//         $(".image").hide()
//         // $(".image").fadeIn(2000)
//     })
// })


$(document).ready(function(){
    $("#image").hide()
    $("#image").fadeIn(3000)

    $(".sections").hide()
    $(".sections").fadeIn(3000)
})


// function for the right button for the slider
$(function right(){
    $(".right").click(function(){
        var currentimg = $(".active")
        var nextdiv = currentimg.next()
        
        for (let i = 1; i < nextdiv.length; i++){
            if (nextdiv.length){
                currentimg.removeClass("active")
                nextdiv.addClass("active")
            }  
        }
    })
})


// function for the left button for the slider
$(function left(){
    $(".left").click(function(){
        var currentimg = $(".active")
        var prevdiv = currentimg.prev()

        for (let i = 1; i < prevdiv.length; i++){
            if (prevdiv.length){
                currentimg.removeClass("active")
                prevdiv.addClass("active")
            } 
        }
    })
})


// function to back yo the top of the page
$(function back(){
    $("#back").click(function(){
        $('html , body').animate({scrollTop : 0}, 1000)
    })
})


// function to show and hide back to top button
$(window).scroll(function(){
    var scrolltop = $("#back")
    if($(window).scrollTop() >= 300){
        scrolltop.fadeIn(500)
    }
    else{
        scrolltop.fadeOut(500)
    }
})


        
    