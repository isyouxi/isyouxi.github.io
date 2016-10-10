/**
 * Created by 张逗张花安卓 on 2016/10/10.
 */

function init() {

}

function itemMainClick(itemnum) {
    if (itemnum == 0) {
        console.log("切换 0");
        window.frames["m_content"].src = "page/mian/mian_list_baidu.html";
    } else {
        console.log("切换 1");
        window.frames["m_content"].src = "page/mian/mian_mine.html";
    }
}

