
$(function () {
    var doch = $(document).height(), winh = $(window).height();

    var nimgs = 5;
    var scrollheight = (doch - winh) / nimgs;
    var arr = [0]; //save position
    var srcs = []; //save image names

    for(var i=0; i<nimgs; i++){
        arr.push((i+1)*scrollheight);
        srcs.push("j" + (i+1) + ".png");
    }

    $(window).scroll(function () {
        var scroll_position = $(document).scrollTop();
        for (i = 0; i < arr.length-1; i++) {
            if(arr[i]< scroll_position && arr[i+1]> scroll_position){
                console.log(srcs[i]);
                $('#animation').attr("src", srcs[i]);
            }
        }
   });
});
