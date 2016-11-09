/**
 * Created by douhua4 on 16/11/7.
 */

function changeTabbarFrame(bodyWidth) {
    var topTitleUlWidth=parseInt($("#top_tltle_ul").css("width"));
    $("#index_title").css("top","36px").css("left",(bodyWidth-topTitleUlWidth)/2+"px");
    if (bodyWidth<=640){
        $("#index_title_more").css("display","block");
        $("#index_title").css("display","none");
    }else {
        $("#index_title_more").css("display","none");
        $("#index_title").css("display","block");
    }
}
