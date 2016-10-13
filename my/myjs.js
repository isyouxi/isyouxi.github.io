/**
 * Created by 张逗张花安卓 on 2016/10/13.
 */
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

function index_01_init() {


    //绑定主页下面两个的事件
    $(".dv_index_01").delegate("a", "click", function () {
        if (!$(this).hasClass("active")) {

            $("#tab_new").toggleClass("active");
            $("#tab_hot").toggleClass("active");

            if ($(this).text() == "最新") {
                $('#if_index_01', this.document).attr("src", "hengji_new.html");
                console.log("attr hengji_new")

            } else {
                $('#if_index_01', this.document).attr("src", "hengji_hot.html");

                console.log("attr hengji_hot")

            }

            console.log("$(this).text() :" + $(this).text())
        }
    });
}