/**
 * Created by 张逗张花安卓 on 2016/11/1.
 */

var curr_Window_height;
var curr_Window_with;

var currScreenMode = '';//large,small

function init() {


    // curr_Window_height = screen.availHeight;  //- 可用的屏幕宽度
    // curr_Window_with = screen.availWidth;// - 可用的屏幕高度

    curr_Window_with = document.body.clientWidth;
    curr_Window_height = document.body.clientHeight;
    updateScreenSet();
    setClick();

}


function setClick() {

    /** 菜单点击 **/
    $("#item-menus").click(function () {
        console.log("onclick");

        if ($('body').css('-webkit-transform') != 'none') {
            //var currTrans = $('body').css('-webkit-transform').split(/[()]/)[1];
            // console.log(currTrans);
            // var curr_translateX = currTrans.split(',')[4];
            // console.log(curr_translateX);
            $('body').css('-webkit-transform', 'none');
        } else {
            $('body').css('transform', 'translateX(-15.625rem)');
        }


    });
}

function sizeChange() {
    //console.log("sizeChange")
    //curr_Window_height = screen.availHeight;  //- 可用的屏幕宽度
    //curr_Window_with = screen.availWidth; // - 可用的屏幕高度

    curr_Window_with = document.body.clientWidth;
    curr_Window_height = document.body.clientHeight;
    updateScreenSet();
}


function updateScreenSet() {

    if (curr_Window_with < 640 && currScreenMode != 'small') {
        currScreenMode = 'small';
        console.log('change set To small');
    } else if (curr_Window_with > 640 && currScreenMode != 'large') {
        console.log('change set To large');
        currScreenMode = 'large';
    } else {
        //console.log("no change set curr_Window_with:" + curr_Window_with + "||currScreenMode:" + currScreenMode);
        return;
    }

    //菜单bar更新
    if (currScreenMode == 'large') {
        $('.mobile-top-bar').hide();
        $('.normal-top-bar').show();

    } else {
        $('.mobile-top-bar').show();
        $('.normal-top-bar').hide();

    }
}