/**
 * Created by douhua4 on 16/10/25.
 */
var isphone = isPhone();

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function mainOnload() {
    console.log(123);
    initMap();
    //绑定主页下面两个的事件
    $(".content").css("height",window.innerHeight-51+'px');
    $(".indexs").delegate("a", "click", function () {
        if (!$(this).hasClass("active")) {
            $("#tab_home").toggleClass("active");
            $("#tab_mine").toggleClass("active");
            if ($(this).children(".tab-label").text() == "主页") {
                $("#myDiv").css("zIndex",1);
                $("#mainDiv").css("zIndex",2);
                $(".pull-left").css("display","block");
                $(".pull-right").css("display","block");
                $(".segmented-control").css("display","block");
                $(".title").css("display","none");
            } else {
                $("#myDiv").css("zIndex",2);
                $("#myDiv").css("height",window.innerHeight-51+'px');
                $(".content").css("height",window.innerHeight-51+'px');
                $("#mainDiv").css("zIndex",1);
                $(".pull-left").css("display","none");
                $(".pull-right").css("display","none");
                $(".segmented-control").css("display","none");
                $(".title").css("display","block");
                alert($("#myDiv").css("height"));
                alert($(".content").css("height"));
                alert($("body").css("height"));
            }
        }
    });
}

function qiehuan(num) {
    console.log("isPhone:" + isphone)
    console.log("qiehuan:" + num)

    changeType(num);

}

function changeType(num) {
    if (isphone) {
        if (num == 0) {
            $('#if_index_01', this.document).attr("src", "hengji_new.html");
            $('#mainNew').css('zIndex',2);
            $('#mainHot').css('zIndex',1);
            loadData_to_new('../hengjih5/File/test_new.txt',0);
        } else {
            $('#if_index_01', this.document).attr("src", "hengji_hot.html");
            $('#mainNew').css('zIndex',1);
            $('#mainHot').css('zIndex',2);
            loadData_to_new('../hengjih5/File/test_hot.txt',1);
        }
    } else {
        if (num == 0) {
            if (!$("#tab_new").hasClass("active")) {
                $("#tab_new").toggleClass("active");
                $("#tab_hot").toggleClass("active");
                $('#if_index_01', this.document).attr("src", "hengji_new.html");
                $('#mainNew').css('zIndex',2);
                $('#mainHot').css('zIndex',1);
                loadData_to_new('../hengjih5/File/test_new.txt',0);
            }
        } else {
            if (!$("#tab_hot").hasClass("active")) {
                $("#tab_new").toggleClass("active");
                $("#tab_hot").toggleClass("active");
                $('#if_index_01', this.document).attr("src", "hengji_hot.html");
                $('#mainNew').css('zIndex',1);
                $('#mainHot').css('zIndex',2);
                loadData_to_new('../hengjih5/File/test_hot.txt',1);
            }
        }
    }
}

function isPhone() {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
        return true;
    }else if (/(Android)/i.test(navigator.userAgent)){
        return true;
    }else {
        return false;
    }
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
            loadData_to_new('../hengjih5/File/test_hot.txt',0);
        }
    }

    setTimeout(function () {
        var convertor = new BMap.Convertor();
        var pointArr = [];
        pointArr.push(point);
        convertor.translate(pointArr, 1, 5, translateCallback);
    }, 1000);
}

function locationError(err) {
    console.log('ERROR(' + err.code + '): ' + err.message);
    alert("获取定位失败" + err.message);
    loadData_to_new('../hengjih5/File/test_hot.txt',0);
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError, options);
}

function loadData_to_new(fileurl,index) {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            showJSON_to_New(xmlhttp.responseText,index);
        }
    }
    xmlhttp.open("GET", fileurl, true);
    xmlhttp.send();
}
function showJSON_to_New(infos,index) {
    var jsonOb = JSON.parse(infos);
    if (jsonOb.result == "01") {
        $(".table-view1").append("<ul>");
        for (var i = 0; i < jsonOb.pd.length; i++) {
            var picUrl = jsonOb.pd[i].PICURL;
            var PLACE = jsonOb.pd[i].PLACE;
            var STRTIME = jsonOb.pd[i].STRTIME;
            var USERNAME = jsonOb.pd[i].USERNAME;
            var MESSAGEINFO = jsonOb.pd[i].MESSAGEINFO;

            if (!picUrl) {
                $("#table-view1").append("<li class='table-view-cell media' >" +
                    "<a  href='http://www.hao123.com' target='_top'>" +
                    "<div class ='media-body'>" + USERNAME +
                    "<p>" + MESSAGEINFO + "<br/>" + STRTIME + " " + PLACE + "</p>" +
                    "</p> " +
                    "</div> " +
                    "</a> " +
                    "</li>");
            } else {
                $("#table-view1").append("<li class='table-view-cell media' >" +
                    "<a href='http://www.baidu.com' target='_top'>" +
                    "<img class ='media-object pull-left' width='42px' height='42px' src='" + picUrl + "'>" +
                    "<div class ='media-body'>" + USERNAME +
                    "<p>" + MESSAGEINFO + "<br/>" + STRTIME + " " + PLACE + "</p>" +
                    "</p> " +
                    "</div> " +
                    "</a> " +
                    "</li>");
            }
        }
        $(".table-view1").append("</ul>");
    }
}