/**
 * Created by 张逗张花安卓 on 2016/10/10.
 */

function init() {
    var map = new AMap.Map('mapholder', {
        zoom: 10,
        center: [116.39, 39.9]
    });

    getLocation();
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

    var map = new AMap.Map('mapholder');
    map.setZoom(15);
    map.setCenter([crd.longitude, crd.latitude]);


    var marker = new AMap.Marker({
        //复杂图标
        /* icon: new AMap.Icon({
         //图标大小
         size: new AMap.Size(28, 37),
         //大图地址
         image: "http://webapi.amap.com/images/custom_a_j.png",
         imageOffset: new AMap.Pixel(-28, 0)
         }),*/
        //在地图上添加点
        position: [crd.longitude, crd.latitude]
    });

    marker.setMap(map);
};

function locationError(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
};

