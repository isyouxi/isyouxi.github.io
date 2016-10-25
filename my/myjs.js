/**
 * Created by 张逗张花安卓 on 2016/10/13.
 */

var isphone = isPhone();

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

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


function initIScroll() {
    var myScroll;

    myScroll = new IScroll('#wrapper', {
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true
    });

    document.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, false);
}
function loadData_to_new(fileurl) {

    initMap();

   /* if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
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
    xmlhttp.send();*/


    var url = 'http://www.douhuayolo.com:8080/zdzh/appmessage/getAppMessageByHot.do?USERID=100198&currentPage=1&showCount=10&XINDEX=31.31369&YINDEX=121.522007&LASTTIME=2016-10-12%2018:42:12&REGISTID=2016101217265221770&LOCALPAGE=0&FKEY=cdaa2fd7c01183ad57c0e4755d0cd77f';
     $.ajax({
             type: "get",
             async: true,
             url: url,
             dataType: "jsonp",
             jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
             jsonpCallback:"flightHandler",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
             success: function(json){
                 alert(json);
             },
             error: function(){
                 alert('fail');
             }
         });

    
}

function initMap() {
    var map = new BMap.Map('mapholder');
    var point = new BMap.Point(116.404, 39.915); // 创建点坐标
    map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别

    getLocation();
}

function locationSuccess(pos) {

    var crd = pos.coords
    var map = new BMap.Map("mapholder");
    var point = new BMap.Point(crd.longitude, crd.latitude);

    // 百度地图API功能
    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    //地图初始化
    map.centerAndZoom(point, 15);
    map.addControl(new BMap.NavigationControl());

    //坐标转换完之后的回调函数
    translateCallback = function (data) {
        if (data.status === 0) {
            var marker = new BMap.Marker(data.points[0]);
            map.addOverlay(marker);
            map.setCenter(data.points[0]);
        }
    }

    setTimeout(function () {
        var convertor = new BMap.Convertor();
        var pointArr = [];
        pointArr.push(point);
        convertor.translate(pointArr, 1, 5, translateCallback)
    }, 1000);
}

function locationError(err) {
    console.log('ERROR(' + err.code + '): ' + err.message);
    alert("获取定位失败" + err.message)
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError, options);
}

function showJSON_to_New(infos) {
    var jsonOb = JSON.parse(infos);

    if (jsonOb.result == "01") {

        $(".table-view").append("<ul>");
        for (var i = 0; i < jsonOb.pd.length; i++) {

            var picUrl = jsonOb.pd[i].PICURL;
            var PLACE = jsonOb.pd[i].PLACE;
            var STRTIME = jsonOb.pd[i].STRTIME;
            var USERNAME = jsonOb.pd[i].USERNAME;
            var MESSAGEINFO = jsonOb.pd[i].MESSAGEINFO;

            if (!picUrl) {
                $(".table-view").append("<li class='table-view-cell media' >" +
                    "<a class ='navigate-right'  href='http://www.hao123.com' target='_top'>" +
                    "<div class ='media-body'>" + USERNAME +
                    "<p>" + MESSAGEINFO + "<br/>" + STRTIME + " " + PLACE + "</p>" +
                    "</p> " +
                    "</div> " +
                    "</a> " +
                    "</li>");
            } else {
                $(".table-view").append("<li class='table-view-cell media' >" +
                    "<a class ='navigate-right' href='http://www.baidu.com' target='_top'>" +
                    "<img class ='media-object pull-left' width='42px' height='42px' src='" + picUrl + "'>" +
                    "<div class ='media-body'>" + USERNAME +
                    "<p>" + MESSAGEINFO + "<br/>" + STRTIME + " " + PLACE + "</p>" +
                    "</p> " +
                    "</div> " +
                    "</a> " +
                    "</li>");
            }
        }

        $(".table-view").append("</ul>");
    }
}