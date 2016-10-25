var header = $('header'),
    minScroll = 50; // min distance to scroll before compacting header
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > minScroll) {
            $('.nbg').fadeOut();
            $('.bg').fadeIn();
            //header.removeClass('nbg').addClass('bg');
        }
        else {
            $('.bg').fadeOut();
            $('.nbg').fadeIn();
            //header.removeClass('bg').addClass('nbg');
        }
    });
    $( "#arrow" ).click(function() {
       $('html, body').animate({scrollTop:725}, 1000);
    });