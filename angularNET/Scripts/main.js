$(document).on('ready', function () {

    $('a.spa').on('click', function () {
        $.cookie("urlReturn", $(this).attr('href'));
    });

});