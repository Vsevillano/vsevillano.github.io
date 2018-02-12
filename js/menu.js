$(document).ready(function() {
    $(document).delegate('.open', 'click', function(event){
        $(this).addClass('oppenned');
        event.stopPropagation();
    })

    $(document).delegate('.open_black', 'click', function(event){
        $(this).addClass('oppenned');
        event.stopPropagation();
    })

    $(document).delegate('body', 'click', function(event) {
        $('.open').removeClass('oppenned');
    })

    $(document).delegate('body', 'click', function(event) {
        $('.open_black').removeClass('oppenned');
    })

    $(document).delegate('.cls', 'click', function(event){
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });

    $(document).delegate('.cls', 'click', function(event){
        $('.open_black').removeClass('oppenned');
        event.stopPropagation();
    });

    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
      
      if (scrollTop >= 600) {
        $('#cabecera').addClass('cabecera2');
        $('#cabecera').removeClass('cabecera');
        $('#open').addClass('open_black');
        $('#open').removeClass('open');

      } else if (scrollTop < 600) {
        $('#open').removeClass('open_black');
        $('#open').addClass('open');

      } 
      
    }); 
    
  });