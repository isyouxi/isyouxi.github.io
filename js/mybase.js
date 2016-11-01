/**
 * Created by 张逗张花安卓 on 2016/11/1.
 */

function mybarinit() {

    /*将下面这段代码放置在 < / body > 之前*/
    var navigation = responsiveNav("#nav", {
            animate: true, // Boolean: 是否启动CSS过渡效果（transitions）， true 或 false
            transition: 400, // Integer: 过渡效果的执行速度，以毫秒（millisecond）为单位
            label: "Menu", // String: Label for the navigation toggle
            insert: "after", // String: Insert the toggle before or after the navigation
            customToggle: "", // Selector: Specify the ID of a custom toggle
            openPos: "relative", // String: Position of the opened nav, relative or static
            jsClass: "js", // String: 'JS enabled' class which is added to <html> el
            debug: false, // Boolean: Log debug messages to console, true 或 false
            init: function () {
                // Function: Init callback

                    console.log('init');
            },
            open: function () {
                // Function: Open callback

                     console.log('open');
            },
            close: function () {
                // Function: Close callback

                      console.log('close');
            }
        }
    );
}