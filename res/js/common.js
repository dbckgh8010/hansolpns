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
