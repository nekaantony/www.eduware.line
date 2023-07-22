$(document).ready(function() {
    if ($(window).scrollTop() > 1) {
        $(".navbar").addClass("navbar-scroll");
    }
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $(".navbar").addClass("navbar-scroll");
        } else {
            $(".navbar").removeClass("navbar-scroll");
        }
    });
});

// -----------------------------------------------------------
$(document).ready(function() {
    $(".h5").on('click', function(event) {
        if (this.hash !== "") {
            var hash = this.hash;
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800, function() {});
            $(".h5").removeClass("h5selected");
            $(this).addClass("h5selected");
        } // End if
    });
});


$(document).ready(function() {
    $(".li").on('click', function(event) {
        if (this.hash !== "") {
            var hash = this.hash;
            event.preventDefault();
            if (document.getElementById(hash.replace('#', '')) == null) {
                window.location.href = this.href;
            }
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800, function() {});
            document.getElementById("mySidenav").style.width = "0";
        } // End if
    });
});


$(document).ready(function() {

    $('#institutedata').typeahead({
        source: function(query, result) {
            $.ajax({
                url: "institutes.php",
                method: "POST",
                data: {
                    query: query
                },
                dataType: "json",
                success: function(data) {
                    result($.map(data, function(item) {
                        return item;
                    }));
                }
            })
        }
    });

});