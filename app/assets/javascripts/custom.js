$(document).ready(function(){
    
    $('.alert').css('margin-bottom', 0);
    $('.alert').css('border-radius', 0);
    
    var x = screen.height - 150;
    $('#sectionhome').css('min-height', x);
    $('#sectionaboutus').css('min-height', x);
    $('#sectioncontact').css('min-height', x);
    $('#sectionprices').css('min-height', x);
    
    $('.img-fluid').css('min-height', 150);
    
    var y = screen.width;
    $('body').css('max-width', y);
    
    var setxybutton = y/4.1;
    $('.navbw').css('min-width', setxybutton);
    
    
    // NAVBAR TOGGLE (ONCLICK)
    jQuery('body').bind('click', function(e) {
        if(jQuery(e.target).closest('.navbar').length == 0) {
            // click happened outside of .navbar, so hide
            var opened = jQuery('.navbar-collapse').hasClass('collapse in');
        if ( opened === true ) {
            jQuery('.navbar-collapse').collapse('hide');
            }
        }
    });

    // RESIZE BUTTONS ON WINDOW RESIZE
    $(window).resize(function(){
        var yx = $(this).width();
        var yxbutton = yx/4;
        $('.navbw').css('min-width', yxbutton);
    });
    
});