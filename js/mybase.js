/**
 * Created by 张逗张花安卓 on 2016/11/1.
 */

var curr_Window_height;
var curr_Window_with;

var currScreenMode = 'large';//large,small

function init() {


    // curr_Window_height = screen.availHeight;  //- 可用的屏幕宽度
    // curr_Window_with = screen.availWidth;// - 可用的屏幕高度

    curr_Window_with = document.body.clientWidth;
    curr_Window_height = document.body.clientHeight;

    updateScreenSet();
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
        console.log("change set To small");
    } else if (curr_Window_with > 640 && currScreenMode != 'large') {
        console.log("change set To large");
        currScreenMode = 'large';
    } else {
        //console.log("no change set curr_Window_with:" + curr_Window_with + "||currScreenMode:" + currScreenMode);
        return;
    }


    if (currScreenMode == 'large') {
        $(".mobile-top-bar").hide();
        $(".normal-top-bar").show();

    } else {
        $(".mobile-top-bar").show();
        $(".normal-top-bar").hide();

    }
}