$(document).ready(function() {
    $(function() {
        //Smoothscroll js
        $('* a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000);
            event.preventDefault();
        });
        //hide collapsible navbar on click
        $('.navbar-nav>li>a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });
        //change nav background color after scroll
        $(document).scroll(function () {
            var $nav = $(".fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > 800);
        });
        //change active class for every click
        $(".navbar-dark li").click(function () {
            $(".navbar-dark li").removeClass("active");
            $(this).addClass("active");     
        });
        $('.navbar-nav').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });
        //change active class for scrooling
        $(window).scroll(function () {
            onScrollHandle();
        });
    });
    function onScrollHandle() {
        $(".navbar-dark").toggleClass("navbar-shrink", $(this).scrollTop() > 0);
        var currentScrollPos = $(document).scrollTop();
        $('#myNavbar > ul > li > a').each(function () {
            var curLink = $(this);
            var refElem = $(curLink.attr('href'));
            if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
                $('#myNavbar > ul > li').removeClass("active");
                curLink.parent().addClass("active");
            }
            else {
                curLink.parent().removeClass("active");
            }
        });
    }   
});