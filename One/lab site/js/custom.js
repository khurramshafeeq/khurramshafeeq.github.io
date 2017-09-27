$(document).ready(function () {
    
    
    //Top Navigation fixed
    // grab the initial top offset of the navigation
    var sticky_navigation_offset_top = $('#sticky_navigation').offset().top;

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var sticky_navigation = function () {
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top

        // if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
        if (scroll_top > sticky_navigation_offset_top) {
            $('#sticky_navigation').addClass("headerfixed");
            $('#sticky_navigation').removeClass("headerrelative");
            $('.headlogo').addClass("logo-s");
            $('.headlogo').removeClass("logo");
            //$('#sticky_navigation').css({ 'position': 'fixed', 'top': 0, 'left': 0, 'z-index': 10000000, 'box-shadow': '0px -3px 7px 0px #757575', 'transition': 'all 0.8s ease' });

            $("#logo").attr('src', 'images/aim.png');
            //$('.logo img').css("margin", "30px 0px 0px 0px");
            $('.nav-bar').css("margin-top", "36px");
            $('.navbar-nav > li > a').css("font-size", "13px");

        } else {
            $('#sticky_navigation').removeClass("headerfixed");
            $('#sticky_navigation').addClass("headerrelative");
            $('.headlogo').addClass("logo");
            $('.headlogo').removeClass("logo-s");
            //$('#sticky_navigation').css({ 'position': 'relative', 'box-shadow': 'none', 'transition': 'all 0.8s ease' });

            $("#logo").attr('src', 'images/aim.png');
            //$('.logo img').css("margin", "37px 0px");
            $('.nav-bar').css("margin-top", "50px");
            $('.navbar-nav > li > a').css("font-size", "14px");

        }
    };

    // run our function on load
    sticky_navigation();

    // and run it again every time you scroll
    $(window).scroll(function () {
        sticky_navigation();
    });
    /*** Quick Contact boxes collapse
----------------------------------------------------------------------------- ****/

    $('.quick-contact-box').on('click', 'header', function () {
        $(this).next('.text').slideToggle();
    });

});