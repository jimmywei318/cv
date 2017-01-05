$(function() {
    //    $(document).ready(function(){
    $('h3').click(function() {
        //        $(this).find('div').slideToggle(500, "easeOutExpo"); //this life from jquery.easing
        $(this).nextAll('p').slideToggle(100);
    });
    $('#hidecontent').click(function(){
        $('p').hide();
    });
    $('#displaycontent').click(function(){
        $('p').show();
    });

    $("#search").keyup(function() {

        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(),
            count = 0;

        // Loop through the comment list
        $(".item").each(function() {

            // If the list item does not contain the text phrase fade it out
            // "i" for case-insensitive matching
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();

                // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                count += 1;
            }
        });

        // Update the count
        var numberItems = count;
        $("#filter-count").text("HITS = " + count);
    });

});
