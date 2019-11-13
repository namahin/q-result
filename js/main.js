// print result

$("#printablebtn").click(function () {
    $("#printableArea").print();
});

// active page
$(function () {
    $('a').each(function () {
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('db-left-nav-active');
            $(this).parents('li').addClass('db-left-nav-active');
        }
    });
});