$(function () {
    $(window).scroll(function () {
        $(".slideanimate").each(function () {
            var winTop = $(window).scrollTop();
            var winheight = $(window).height();
            var pos = $(this).offset().top;
            if (pos < winTop + winheight*0.8) {
                $(this).addClass("animated fadeInUp slide");
            }
            if(winTop == 0){
                $(this).removeClass("animated fadeInUp slide");
            }
        });




    });
});
