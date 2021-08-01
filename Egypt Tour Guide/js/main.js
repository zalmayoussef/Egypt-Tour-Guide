$(document).ready(function(){
    $('#btn2').click(function(){
        $('#p2').slideToggle(1000);
    });
    $('.fa-bars').on('click',function(){
        $('#leftNavbar').toggleClass('visible');
        if($('#leftNavbar').hasClass('visible'))
            {
                $('#leftNavbar').animate({
                    right: 0
                },);  
            }
        else{
            
            $('#leftNavbar').animate({
                    right: '-220px'
                },);
        }
    });
    
});
 