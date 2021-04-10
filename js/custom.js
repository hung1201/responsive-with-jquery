$(function(){
    new WOW().init(); 
  });

$(document).ready(function(){
    $("#work").magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    });

})

$(document).ready(function(){
    $("#team-members").owlCarousel({
        items:3,
        autoplay:true,
        loop:true,
        smartSpeed:700,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items:1
            },
            480: {
                items:2
            },
            768: {
                items:3
            }
        }
    });
})

$(document).ready(function(){
    $("#customers-reviews").owlCarousel({
        items:1,
        autoplay:true,
        loop:true,
        smartSpeed:700,
        autoplayHoverPause:true,
    });
})
$(document).ready(function(){
    $("#clients-list").owlCarousel({
        items:5,
        autoplay:true,
        loop:true,
        smartSpeed:700,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items:1
            },
            480: {
                items:2
            },
            768: {
                items:4
            },
            992: {
                items:5
            }
        }
    });
})
$(document).ready(function() {
    $('.counter').counterUp({
        delay: 5,
        time: 1000
    });
});

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 80){
            $("nav").removeClass("custom-nav")
        }
        else {
            $("nav").addClass("custom-nav")
        }
    })
})

$(function(){
    $(".navbar-collapse ul li a").on("click touch", function(){
        $(".navbar-toggle").click()
    })
})
