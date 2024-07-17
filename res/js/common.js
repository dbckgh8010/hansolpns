$(function() {
    var $menu = $('.title'),
        $header = $('.header');

    $menu.mouseover(function(){
        var subHeight = $(this).find('.nav__sub').outerHeight();
        $header.stop().animate({height: 100 + subHeight + 'px'}, 300);
        $(this).find('.nav__sub').css('display', 'block');
        $header.addClass("on");
    })
    $header.mouseout(function(){
        $header.stop().animate({height: 100 + 'px'}, 300);
        $(this).find('.nav__sub').css('display', 'none');
        $header.removeClass("on");
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 0){
        $('.header').addClass('fixed')
    } else {
        $('.header').removeClass('fixed')
    };
});

$('.mo__menu').ready(function() {
    $('.mo__title').on('click', function() {
        if($(this).hasClass('on')) {
            $(this).removeClass('on').next().slideUp(200);
        } else {
            slideUp();
            $(this).addClass('on').next().slideDown(200);
        }
        function slideUp() {
            $('.mo__title').removeClass('on').next().slideUp(200);
        };
    });
});

$(function() {
    $(".mo__btn").on('click', function(){
        if ('block' == $(".header__mo").css('display')){
            $(this).removeClass('on')
            $(".header__mo").removeClass('on').hide()
            $('html').css({'overflow-y' : '', 'margin-right' : '0', 'width' : '100%'});
        } else {
            $('html').css({'overflow-y' : 'hidden', 'width' : 'auto'});
            $(this).addClass('on')
            $(".header__mo").addClass('on').show()
        }
    })
});

$('.mo__sub').ready(function() {
    $('.list1').on('click', function() {
        if($(this).hasClass('click')) {
            $(this).removeClass('click').next().slideUp(200);
        } else {
            slideUp();
            $(this).addClass('click').next().slideDown(200);
        }
        function slideUp() {
            $('.list1').removeClass('click').next().slideUp(200);
        };
    });
}); 