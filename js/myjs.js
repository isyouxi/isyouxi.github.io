/**
 * Created by 张逗张花安卓 on 2016/10/10.
 */

function tlocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        x.innerHTML = "Geolocation is not supported by this browser.";

         $(document).ready(function () {
        $(".slocation").append("666");
    });
    }


}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br />Longitude: " + position.coords.longitude;

    $(document).ready(function () {
        $(".slocation").append("555");
    });
}