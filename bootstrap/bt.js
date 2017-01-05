$(document).ready(function () {
    //照片彈出
    $('.modalthumb').click(function () {
        $('.modal-body').empty();
        var title = $(this).parent('a').attr("title");
        $('.modal-title').html(title);
        $($(this).parents('div').html()).appendTo('.modal-body');
        $('#myModal').modal({
            show: true
        });
    });


    //文字彈出

    $('[data-toggle="popover"]').popover({
        trigger: "hover",
        container: 'body'
    });

    //隱藏選單
    $(".flip").click(function () {
        $(this).find('p.description').slideToggle(200, 'easeInSine');
    });

    //google spreadsheet
    var mygoogleSpreadsheet = "https://docs.google.com/spreadsheets/d/1IuxZnC-SFLGOXozkTnzk18MMV2sGWs9U26zwsjD4w5A/pubhtml?gid=0&single=true"
    $("#my-table").sheetrock({
        url: mygoogleSpreadsheet,
        query: "select A,B,C, E, H order by H desc"
    });

});

//ajaxtest
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("ajaxtest").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "../assets/toload.txt", true);
    xhttp.send();
}

function loadDoc2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("ajaxtest2").innerHTML = this.responseText;
            document.getElementById("btn01").innerHTML = "Above Text has been modified";
        }
    };
    xhttp.open("GET", "../assets/toload2.txt", true);
    xhttp.send();
}

function loadJSON() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var out = "aaaa";
            document.getElementById("jsontest").innerHTML = out;
            document.getElementById("btn02").innerHTML = "JSON data loaded Successfully!!";
        }
    };
    xhttp.open("GET", "../assets/UV.json", true);
    xhttp.send();
}

function loadJSON2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var out = "<ul><li>" + obj[1]['SiteName'] + "</li><li>" + obj[1]['UVI'] + "</li><li>" + obj[1]['County'] + "</li></ul>";
            document.getElementById("jsontest2").innerHTML = out;
            document.getElementById("btn03").innerHTML = "Success!!";
        }
    };
    xhttp.open("GET", "../assets/UV.json", true);
    xhttp.send();
}

function loadJSON3() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var out = "<table class='table table-hover table-bordered table-striped'> <thead><tr><th>SiteName</th><th>UVI</th><th>County</th></tr></thead><tbody>";

            for (var i = 0; i < obj.length; i++) {
                out += "<tr><td>" + obj[i]['SiteName'] +
                    "</td><td>" + obj[i]['UVI'] +
                    "</td><td>" + obj[i]['County'];
            }

            out += "</td></tr></tbody></table>"
            document.getElementById("jsontest3").innerHTML = out;
            document.getElementById("btn04").innerHTML = "Success!!";
        }
    };
    xhttp.open("GET", "../assets/UV.json", true);
    xhttp.send();
}
//jquery 隱藏選單
//$(document).ready(function () {
//    $(".flip").click(function () {
//        $(this).find('p.description').slideToggle(200);
//    });
//
//});
