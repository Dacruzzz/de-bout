$(document).ready(function(){
    
    $('.alert').css('margin-bottom', 0);
    $('.alert').css('border-radius', 0);
    
    var x = screen.height - 150;
    $('#sectionhome').css('min-height', x);
    $('#sectionaboutus').css('min-height', x);
    $('#sectioncontact').css('min-height', x);
    $('#sectionprices').css('min-height', x);

    var y = screen.width;
    var ybutton = y/4.25;
    var yheader = y/1.25;
    
    if(y > 700){
        $('.navbw').css('min-width', ybutton);
    } else {
        $('.active > a').css('min-width', y);
    }
    
    $('.img-fluid').css('min-width', yheader);
    $('.img-fluid').css('min-height', 150);
    
    $('body').css('max-width', y);
});