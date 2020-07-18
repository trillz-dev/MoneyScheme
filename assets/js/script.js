(function ($) {
    "use strict";

    $(document).ready(function () {
        $('#nav').onePageNav({
            currentClass: 'current-menu-item',
        });
    });

    var html5lightbox_options = {
        watermarklink: ""
    };

    $(".media__content").each(function () {
        var thesrc = $(this).attr('src');
        $(this).parent().css("background-image", "url(" + thesrc + ")");
        $(this).parent().css("background-repeat", "no-repeat");
        $(this).hide();
    });

})(jQuery);