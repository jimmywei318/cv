$(function () {
    console.log("loading jquery successfully!");

    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();


        $("#video1").scroll(function () {
            if (scroll_position > $("#video1").position().top) {
                $("#video1")[0].play();
                $("#video1").addClass("played");
            }
        });

        $('#video2').scroll(function () {
            if (scroll_position > $('#video2').position().top && !$(this).hasClass("played")) {
                $(this)[0].play();
                $(this).addClass("played");
            }
        });
        //        $('video').each(function () {
        //            if(scroll_position > $(this).position().top && !$(this).hasClass("played")){
        //                $(this)[0].play();
        //                $(this).addClass("played");
        //            }
        //            else{
        //                $(this)[0].pause();
        //            }
        //        });
    });



});
