/**
 * Created by 张逗张花安卓 on 2016/10/10.
 */
function init() {
    var map = new BMap.Map('mapholder');
    var point = new BMap.Point(116.404, 39.915); // 创建点坐标
    map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别

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





