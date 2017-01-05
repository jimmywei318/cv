$(function() {
    //    $(document).ready(function(){

    $('#hidecontent').click(function(){
        $('p').hide();
    });
    $('#displaycontent').click(function(){
        $('p').show();
    });

    $('h3').click(function() {
        $(this).nextAll('p').slideToggle(100);
    });


    $("#search").keyup(function() {
        var filter = $(this).val(),
            count = 0;

        $(".item").each(function() {
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
            } else {
                $(this).show();
                count += 1;
            }
        });

        var numberItems = count;
        $("#filter-count").text("HITS = " + count);
    });


//    $("#search").keyup(function() {
//
//        // Retrieve the input field text and reset the count to zero
//        var filter = $(this).val(),
//            count = 0;
//
//        // Loop through the comment list
//        $(".item").each(function() {
//
//            // If the list item does not contain the text phrase fade it out
//            // "i" for case-insensitive matching
//            var pattern = new RegExp(filter, "i");
//            if ($(this).text().search(pattern) < 0) {
//                $(this).fadeOut();
//            } else
//            {
//                // Show the list item if the phrase matches and increase the count by 1
//                var match = $(this).match(pattern);
//                var html = $(this).html().replace(pattern, '<span class="searchkeyword">' + '3' + '</span>');
//                $(this).html(html);
//                $(this).show();
//                count += 1;
//            }
//        });
//
//        // Update the count
//        var numberItems = count;
//        $("#filter-count").text("HITS = " + count);
//    });

});
