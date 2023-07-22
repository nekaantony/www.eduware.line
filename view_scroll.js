$(window).scroll(function() {
    var delta = $(window).height() + $('#section-keep-view').height() - $('#section-nav-left-keep-view').height();
    if (($(window).scrollTop() > $('#section-keep-view').offset().top - 60) && ($(window).scrollTop() < delta)) {
        $('#section-nav-left-keep-view').addClass('scrolling');
    } else {
        $('#section-nav-left-keep-view').removeClass('scrolling');
    }
});