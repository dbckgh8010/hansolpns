$(function() {
    var $menu = $('.title'),
        $header = $('header'),
        $headerHeight = $header.outerHeight();

    $menu.mouseover(function(){
        var subHeight = $(this).find('.nav__sub').outerHeight();
        $header.stop().animate({height: $headerHeight + subHeight + 'px'}, 300);
    })
    .mouseout(function(){
        $header.stop().animate({height: $headerHeight + 'px'}, 300);
    });
})