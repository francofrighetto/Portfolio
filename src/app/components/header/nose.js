$('#mobile-menu-open').click(function() {
    $('header, body').addClass('active');
});

// Close mobile menu
$('#mobile-menu-close').click(function() {
    $('header, body').removeClass('active');
});