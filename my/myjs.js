/**
 * Created by 张逗张花安卓 on 2016/10/13.
 */

var isphone = isPhone();


function index_init() {
    //绑定主页下面两个的事件
    $(".indexs").delegate("a", "click", function () {
        if (!$(this).hasClass("active")) {

            $("#tab_home").toggleClass("active");
            $("#tab_mine").toggleClass("active");
            if ($(this).children(".tab-label").text() == "主页") {
                $('#if_main_content', parent.document).attr("src", "page/index_01.html");
            } else {
                $('#if_main_content', parent.document).attr("src", "page/index_02.html");
            }
        }
    });

}

function qiehuan(num) {
    console.log("isPhone:" + isphone)
    console.log("qiehuan:" + num)


    if (isphone) {
        if (num == 0) {
            $('#if_index_01', this.document).attr("src", "hengji_new.html");
        } else {
            $('#if_index_01', this.document).attr("src", "hengji_hot.html");

        }
    } else {
        if (num == 0) {
            if (!$("#tab_new").hasClass("active")) {
                $("#tab_new").toggleClass("active");
                $("#tab_hot").toggleClass("active");
                $('#if_index_01', this.document).attr("src", "hengji_new.html");


            }
        } else {
            if (!$("#tab_hot").hasClass("active")) {
                $("#tab_new").toggleClass("active");
                $("#tab_hot").toggleClass("active");
                $('#if_index_01', this.document).attr("src", "hengji_hot.html");
            }
        }
    }

}


function isPhone() {

    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        //alert(navigator.userAgent);
        return true;
    } else if (/(Android)/i.test(navigator.userAgent)) {
        //alert(navigator.userAgent);
        return true;
    } else {
        return false;
    }
    ;
}


function index_01_init() {
    console.log("index_01_init")
    $('#if_index_01', this.document).attr("src", "hengji_new.html");


    //绑定主页下面两个的事件 (移动设备有问题 无反应)
    /*
     $(".dv_index_01").delegate("a", "click", function () {
     if (!$(this).hasClass("active")) {

     $("#tab_new").toggleClass("active");
     $("#tab_hot").toggleClass("active");

     console.log("-------" + $(this).text())
     if ($(this).text() == "最新") {
     $('#if_index_01', this.document).attr("src", "hengji_new.html");
     console.log("attr hengji_new")

     } else {
     $('#if_index_01', this.document).attr("src", "hengji_hot.html");

     console.log("attr hengji_hot")

     }

     console.log("$(this).text() :" + $(this).text())
     }
     });*/
}


function loadData_to_new(fileurl) {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            showJSON_to_New(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", fileurl, true);
    xmlhttp.send();
}

function showJSON_to_New(infos) {
    var jsonOb = JSON.parse(infos);

    if (jsonOb.result == "01") {

        for (var i = 0; i < jsonOb.pd.length; i++) {

            var picUrl = jsonOb.pd[i].PICURL;
            var PLACE = jsonOb.pd[i].PLACE;
            var STRTIME = jsonOb.pd[i].STRTIME;
            var USERNAME = jsonOb.pd[i].USERNAME;
            var MESSAGEINFO = jsonOb.pd[i].MESSAGEINFO;

            if (!picUrl) {
                $(".table-view").append("<li class='table-view-cell media' >" +
                    "<a class ='navigate-right'>" +
                    "<div class ='media-body'>" + USERNAME +
                    "<p>" + MESSAGEINFO + "<br/>" + STRTIME + " " + PLACE + "</p>" +
                    "</p> " +
                    "</div> " +
                    "</a> " +
                    "</li>");
            } else {
                $(".table-view").append("<li class='table-view-cell media' >" +
                    "<a class ='navigate-right'>" +
                    "<img class ='media-object pull-left' width='42px' height='42px' src='" + picUrl + "'>" +
                    "<div class ='media-body'>" + USERNAME +
                    "<p>" + MESSAGEINFO + "<br/>" + STRTIME + " " + PLACE + "</p>" +
                    "</p> " +
                    "</div> " +
                    "</a> " +
                    "</li>");
            }

        }
    }


}