/**
 * Created by 张逗张花安卓 on 2016/10/10.
 */
function init() {
    var map = new BMap.Map('mapholder');
    var point = new BMap.Point(116.404, 39.915); // 创建点坐标
    map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别

    getLocation();
    loadXMLDoc();
}


var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};


function getLocation() {
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError, options);
}

function locationSuccess(pos) {
    var crd = pos.coords;
    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');

    var map = new BMap.Map("mapholder");
    var point = new BMap.Point(crd.longitude, crd.latitude);
    window.setTimeout(function () {
        map.panTo(point);
    }, 1000);

    var marker = new BMap.Marker(point);
    map.addOverlay(marker);                     // 将标注添加到地图中


}

function locationError(err) {
    console.log('ERROR(' + err.code + '): ' + err.message);
}


function loadXMLDoc() {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
            showJSON(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", "../../file/test1.txt", true);
    xmlhttp.send();


}


function showJSON(infos) {
    var jsonOb = JSON.parse(infos);
    console.log(jsonOb.title);
    console.log(jsonOb.signing[0].author.title);
    console.log(jsonOb.signing[1].book.title);
    console.log(jsonOb.signing[1].avatar_large);

    /*<li class="table-view-cell media">
     <a class="navigate-right">
     <img class="media-object pull-left" src="http://placehold.it/42x42">
     <div class="media-body">
     Item 1
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
     labore et dolore. Lorem ipsum dolor sit amet.</p>
     </div>
     </a>
     </li>*/


    for (var i = 0; i < jsonOb.signing.length; i++) {
        $(".table-view").append("<li class='table-view-cell media' ><a class ='navigate-right'><img class ='media-object pull-left' width='42px' height='42px' src='" + jsonOb.signing[i].avatar_large + "'><div class ='media-body'>" + jsonOb.signing[i].author.title + "<p>" + jsonOb.signing[i].book.title + "</p> </div> </a> </li>");
    }


}




