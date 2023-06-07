$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-xmark');
        $('.media').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-xmark');
        $('.media').removeClass('toggle'); 
    });
});
