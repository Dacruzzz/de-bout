$(document).ready(function(){
    
    $('.alert').css('margin-bottom', 0);
    $('.alert').css('border-radius', 0);    
    
    var x = screen.height - 150;
    $('#sectionhome').css('min-height', x);
    $('#sectionaboutus').css('min-height', x);
    $('#sectioncontact').css('min-height', x);
    $('#sectionprices').css('min-height', x);

    var y = screen.width;
    var bw = y/4.25 ;
    
    if(y > 700){
        $('.navbw').css('min-width', bw);
    } else {
        $('.active > a').css('min-width', y);
    }
    
    $('body').css('max-width', y);
});