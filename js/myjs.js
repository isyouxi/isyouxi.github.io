/**
 * Created by youxi on 2016/3/27.
 */
/*$("p").clone().appendTo(document.body);*/
/*$("#target").scroll(function() {
    $("#log").append("<div>Handler for .scroll() called.</div>");
});*/
$(window).scroll(function () {
   // $("span").css("display", "inline").fadeOut("slow");
    $("#log").append("<div>Handler for .scroll() called.</div>");
});