$(document).ready(function () {
    $(".slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        // autoplay: true,
        // autoplaySpeed: 1000,
        arrows: false
    });
    smoothScroll.init();
});

$(document).ready(function () {
    $(".menu-trigger").click(function () {
        $("nav ul").slideToggle(500);
    });
    $(window).resize(function () {
        if ($(window).width() > 500) {
            $("nav ul").removeAttr("style");
        }
    });
});