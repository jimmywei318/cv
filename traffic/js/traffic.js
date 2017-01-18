$(document).ready(function () {
    //    navbar
    var e = !1;

    $('[data-toggle="tooltip"]').tooltip(), $(".burger-icon").click(function () {
        e = !e, e ? ($(".nav-container").show(), $(".burger-icon").addClass("open")) : ($(".nav-container").hide(), $(".burger-icon").removeClass("open"), $(".nav-container").removeAttr("style"))
    });

    var t = $(".nav-icon").width();
    $(".nav-icon").css({
        "min-height": t + "px"
    });

    //car scroll animation
    $(function () {
        var window_width = $(window).width() - $('.moved').width();
        var document_height = $(document).height() - $(window).height();
        $(window).scroll(function () {
            var scroll_position = $(window).scrollTop();
            var object_position_left = window_width * (scroll_position / document_height) * 2;

            if (object_position_left <= window_width) {
                $('.moved').css({
                    'left': object_position_left
                });
            } else {
                $('.moved').css({
                    'left': window_width
                });
            }

        });
    });

    $(function () {
        var window_width = $(window).width() - $('.moved2').width();
        var document_height = $(document).height() - $(window).height();
        $(window).scroll(function () {
            var scroll_position = $(window).scrollTop();
            var object_position_right = window_width * (scroll_position / document_height) * 2;

            if (object_position_right <= window_width) {
                $('.moved2').css({
                    'right': object_position_right
                });
            } else {
                $('.moved2').css({
                    'right': window_width
                });
            }

        });
    });

    //    place

    $('#box').scroll(function () {
        $("#place1").each(function () {
            var pos = $('#place1').offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + 400) {
                $('#place1').addClass("active");
            } else {
                $('#place1').removeClass('active');
            }
        });
    });

    $('#box').scroll(function () {
        $("#place1").each(function () {
            var pos = $('#place2').offset().top;
            var pos1 = $('#place1').offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + 400) {
                $('#place2').addClass("active");

            } else {
                $('#place2').removeClass('active');
            }
        });
    });

    $('#box').scroll(function () {
        $("#place2").each(function () {
            var pos = $('#place3').offset().top;
            var pos1 = $('#place2').offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + 400) {

                $('#place3').addClass("active");

            } else {
                $('#place3').removeClass('active');
            }
        });
    });

       $('#place2').waypoint(function () {
        $('#scrollme').css("visibility", "hidden");
    }, {
        offset: '80%'
    });


    //   carkind
    $('#mbike').waypoint(function () {
        $('#mbike').addClass('animated fadeInLeft');
        $('#mbike').css("visibility", "visible");
    }, {
        offset: '80%'
    });

    $('#car').waypoint(function () {
        $('#car').addClass('animated fadeInLeft');
        $('#car').css("visibility", "visible");
    }, {
        offset: '83%'
    });

    $('#taxi').waypoint(function () {
        $('#taxi').addClass('animated fadeInLeft');
        $('#taxi').css("visibility", "visible");
    }, {
        offset: '83%'
    });

    $('#passenger').waypoint(function () {
        $('#passenger').addClass('animated fadeInLeft');
        $('#passenger').css("visibility", "visible");
    }, {
        offset: '85%'
    });

    $('#truck').waypoint(function () {
        $('#truck').addClass('animated fadeInLeft');
        $('#truck').css("visibility", "visible");
    }, {
        offset: '85%'
    });

    $('#bike').waypoint(function () {
        $('#bike').addClass('animated fadeInLeft');
        $('#bike').css("visibility", "visible");
    }, {
        offset: '87%'
    });

    $('#bus').waypoint(function () {
        $('#bus').addClass('animated fadeInLeft');
        $('#bus').css("visibility", "visible");
    }, {
        offset: '87%'
    });

    //    number count animate




    //
    //        $(window).scroll(function () {
    //            $("#number30").one(function () {
    //                var pos = $('#number30').offset().top;
    //                var winTop = $(window).scrollTop();
    //                if (pos < winTop+400) {
    //                    $('#number30').animateNumber({
    //                        number: 30
    //                    }, 'slow');
    //                };
    //            });
    //        });


    //$(function () {
    //    $(window).scroll(function () {
    //        $("#number30").each(function () {
    //            var winTop = $(window).scrollTop();
    //            var winheight = $(window).height();
    //            var pos = $(this).offset().top;
    //            if (pos < winTop + winheight*0.8) {
    //                 $('#number30').animateNumber({
    //                    number: 30
    //                }, 'slow');
    //                $('#number30').css('visibility':"visible");
    //            } else{
    //                $('#number30').append("30");
    //            }
    //
    //        });
    //    });
    //});





    //
    //      $(window).scroll(function () {
    //        $("#number25").each(function () {
    //            var pos = $('#number25').offset().top;
    //            var winTop = $(window).scrollTop();
    //            if (pos < winTop+400) {
    //                $('#number25').animateNumber({
    //                    number: 25
    //                }, 'slow');
    //            };
    //        });
    //    });

    //    $(function(){
    //
    //          if($('#place1').hasClass('active')){
    //         $('#number30').animateNumber({
    //                    number: 30
    //                }, 'slow');
    //    }
    //
    //    if($('#place2').hasClass('active')){
    //         $('#number25').animateNumber({
    //                    number: 25
    //                }, 'slow');
    //    }
    //
    //    if($('#place3').hasClass('active')){
    //         $('#number23').animateNumber({
    //                    number: 23
    //                }, 'slow');
    //    }
    //
    //    });




    //
    //                $('#number25').each(function () {
    //                    $(this).prop('Counter', 0).animate({
    //                        Counter: $(this).text()
    //                    }, {
    //                        duration: 2000,
    //                        easing: 'swing',
    //                        step: function (now) {
    //                            $(this).text(Math.ceil(now));
    //                        }
    //                    });
    //                });
    //

    $('#number30').waypoint(function () {
        $('#number30').prop('Counter', 0).animate({
            Counter: $('#number30').text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $('#number30').text(Math.ceil(now));
            }
        });
    }, {
        offset: '60%'
    });


//    $('#number25').waypoint(function () {
//        $('#number25').prop('Counter', 0).animate({
//            Counter: $('#number25').text()
//        }, {
//            duration: 2500,
//            easing: 'swing',
//            step: function (now) {
//                $('#number25').text(Math.ceil(now));
//            }
//        });
//    }, {
//        offset: '60%'
//    });
//
//           $('#number23').waypoint(function () {
//            $('#number23').prop('Counter', 0).animate({
//                Counter: $('#number23').text()
//            }, {
//                duration: 2300,
//                easing: 'swing',
//                step: function (now) {
//                    $('#number23').text(Math.ceil(now));
//                }
//            });
//        }, {
//            offset: '60%'
//        });




    //        $('#number30').waypoint(function () {
    //            $('#number30').animateNumber({
    //                number: 30
    //            }, 'slow');
    //        }, {
    //            offset: '60%'
    //        });
    //
    //        $('#number25').waypoint(function () {
    //            $('#number25').animateNumber({
    //                number: 25
    //            }, 'slow');
    //        }, {
    //            offset: '40%'
    //        });
    //
    //    $('#number23').waypoint(function () {
    //        $('#number23').animateNumber({
    //            number: 23
    //        }, 'slow');
    //    }, {
    //        offset: '60%'
    //    });



    //    end
        $('#carend').waypoint(function () {
                $('#carend').animate({
                    bottom: "0.5em",
                    width: "20%",
                    left: "40%"
                }, 2000);
        }, {
            offset: '100%'
        });



//    $(window).scroll(function () {
//        var scrollTop = $(this).scrollTop();
//        var scrollHeight = $(document).height();
//        var windowHeight = $(this).height();
//        if (scrollTop + windowHeight == scrollHeight) {
//            $('#carend').animate({
//                bottom: "0.5em",
//                width: "20%",
//                left: "40%"
//            }, 2000);
//        }
//    });



});
