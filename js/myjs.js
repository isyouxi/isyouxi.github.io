/**
 * Created by 张逗张花安卓 on 2016/10/10.
 */

function init() {
    var map = new AMap.Map('mapholder', {
        center: [117.000923, 36.675807],
        zoom: 11
    });
}

/*
 function tlocation() {

 var x = document.getElementById("demo");
 if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(showPosition);
 console.log("navigator.geolocation true");
 }
 else {
 console.log("navigator.geolocation false");
 x.innerHTML = "Geolocation is not supported by this browser.";
 }

 $(document).ready(function () {
 $(".slocation").append("666");
 });
 }


 function showPosition() {

 }*/
var x = document.getElementsByClassName("slocation");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
    else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    console.log(position.coords.latitude, position.coords.longitude);

    var map = new AMap.Map('mapholder', {
        // 设置中心点
        center: [position.coords.longitude, position.coords.latitude],

        // 设置缩放级别
        zoom: 13
    });

    var marker = new AMap.Marker({
        //复杂图标
        icon: new AMap.Icon({
            //图标大小
            size: new AMap.Size(28, 37),
            //大图地址
            image: "http://webapi.amap.com/images/custom_a_j.png",
            imageOffset: new AMap.Pixel(-28, 0)
        }),
        //在地图上添加点
        position: [position.coords.longitude, position.coords.latitude]
    });

    marker.setMap(map);

}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}