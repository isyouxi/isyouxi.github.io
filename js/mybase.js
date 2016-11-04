/**
 * Created by 张逗张花安卓 on 2016/11/1.
 */

var curr_Window_height;
var curr_Window_with;

var curr_fit_mobile_nav_with;

var currScreenMode = '';//large,small


function init() {
    // curr_Window_height = screen.availHeight;  //- 可用的屏幕宽度
    // curr_Window_with = screen.availWidth;// - 可用的屏幕高度
    curr_Window_with = document.body.clientWidth;
    curr_Window_height = document.body.clientHeight;


    curr_fit_mobile_nav_with = curr_Window_with * 0.9;

    updateScreenSet();
    setClick();
    setVerticalBar();

    setscroll();
}


/** 主页的百分占比 **/
var percentage_scroll_home;
/** 视频的百分占比 **/
var percentage_scroll_videos;
/** What的百分占比 **/
var percentage_scroll_what;

var curr_scroll_position;

var all_screen_height;

function setscroll() {

    all_screen_height = $(document).height() - $(window).height();

    var body_height = $('body').height();

    percentage_scroll_home = $('.header-container').height() / body_height;
    percentage_scroll_videos = $('#mc-videos').height() / body_height + percentage_scroll_home;
    percentage_scroll_what = $('#mc-what').height() / body_height + percentage_scroll_videos;

    $(this).scroll(function (s) {

        var curr_Percentage = $(window).scrollTop() / all_screen_height;

        var c_position;

        if (curr_Percentage < percentage_scroll_home) {

            //home
            // console.log("滑动到了home");
            // console.log("curr_Percentage:" + curr_Percentage);

            c_position = 1;
        } else if (curr_Percentage < percentage_scroll_videos) {
            //视频
            // console.log("滑动到了视频");
            // console.log("curr_Percentage:" + curr_Percentage);

            c_position = 2;
        } else if (curr_Percentage < percentage_scroll_what) {
            //WAHT
            // console.log("滑动到了WAHT");
            // console.log("curr_Percentage:" + curr_Percentage);
            c_position = 3;
        } else {
            //关于我们
            // console.log("滑动到了关于我们");
            // console.log("curr_Percentage:" + curr_Percentage);
            c_position = 4;
        }

        if (curr_scroll_position != c_position) {
            curr_scroll_position = c_position;
            //更新条目
            updateNormalVerticalBarStatus();
            updateMobileVerticalBarStatus();
        }
    });
}


function scollTo(numb) {

    var scrollTo = function (position) {
        $('body').animate({
                scrollTop: position
            }, 800
        );
    }

    if (numb == 1) {
        scrollTo(0, 800);
    } else if (numb == 2) {
        scrollTo(percentage_scroll_videos * all_screen_height, 800);
    } else if (numb == 3) {
        scrollTo(percentage_scroll_what * all_screen_height, 800);
    } else {
        scrollTo(curr_scroll_position * all_screen_height, 800);
    }
}


function updateNormalVerticalBarStatus() {

    $('[data-number]').each(function () {
        if ($(this).attr("data-number") == curr_scroll_position) {
            $(this).children().css({'background': '#e778f6'});
        } else {
            $(this).children().css({'background': '#31fddf'});
        }
    });
}

function updateMobileVerticalBarStatus() {
    //TODO
}


function updateVerticalBar() {
    if (currScreenMode != 'small') {
        $('.nav-vertical-bar').show();
        $('.mobile-nav-vertical-bar').hide();
    } else {
        console.log("curr_fit_mobile_nav_with:", curr_fit_mobile_nav_with);
        $('#mobile-nav-vertical-bar-ul').css('width', curr_fit_mobile_nav_with + "px");
        $('.mobile-nav-vertical-bar').show();
        $('.nav-vertical-bar').hide();
    }
}


function setVerticalBar() {

    for (var i = 1; i < 5; i++) {
        var navs_a = $('[data-number =   ' + i + ']');

        navs_a.mousemove(function () {
            $(this).children("div.li-dot").hide();
            $(this).children("div.li-label").show();

        });

        navs_a.mouseleave(function () {
            $(this).children("div.li-label").hide();
            $(this).children("div.li-dot").show();
        });
    }


    $('.mobile-nav-vertical-bar').mouseleave(function () {
        var child_ul = $(this).children('ul');

        if (!child_ul.is(":hidden")) {
            child_ul.hide();
            $('#mobile-nav-vertical-bar-menu img').attr("src", './image/menu.png');
            $('#mobile-nav-vertical-bar-menu img').css({"width": '24px', "height": "24px"});
            $('#mobile-nav-vertical-bar-menu').css('background', '#fff');
        }

    });
    $('#mobile-nav-vertical-bar-menu').click(function () {
        var bar = $('#mobile-nav-vertical-bar-ul').toggle();

        if (bar.is(":hidden")) {
            //换成menu
            $(this).children('img').attr({'src': './image/menu.png'});
            $('#mobile-nav-vertical-bar-menu img').css({"width": '24px', "height": "24px"});
            $(this).css('background', '#fff');
        } else {
            //换成close
            $(this).children('img').attr({'src': './image/close.png'});
            $('#mobile-nav-vertical-bar-menu img').css({"width": '15px', "height": "15px"});
            $(this).css('background', 'transparent');
        }
    });
}

function setClick() {
    /** 移动TOP右边菜单点击展开和缩放 **/
    $("#item-menus").click(function () {

        $('body').css(
            {'transform': 'translateX(-15.625rem)'}
        );
        $('.exit-off-canvas').show();
        /*$('.exit-off-canvas').click(function () {
         $(this).hide();
         });

         if ($('body').css('-webkit-transform') != 'none') {
         $('body').css('-webkit-transform', 'none');
         } else {

         }*/
    });

    $('.exit-off-canvas').click(function () {
        $('body').css('-webkit-transform', 'none');
        $(this).hide();
    });


    /** 移动TOP右边菜单点击关闭 **/
    /*$('body').click(function () {
     if ($('body').css('-webkit-transform') != 'none') {
     $('body').css('-webkit-transform', 'none');
     }
     });*/
}

function sizeChange() {
    curr_Window_with = document.body.clientWidth;
    curr_Window_height = document.body.clientHeight;

    curr_fit_mobile_nav_with = curr_Window_with * 0.9;

    $('#mobile-nav-vertical-bar-ul').css('width', curr_fit_mobile_nav_with + "px");
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


    updateVerticalBar();
}