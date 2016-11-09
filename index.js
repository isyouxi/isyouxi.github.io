/**
 * Created by douhua4 on 16/11/7.
 */

var bodyWidth=0;

function indexLoad(width0) {
    bodyWidth=width0;
    $("#main_left li").hover(function () {
        var oSpan=this.getElementsByTagName("span")[0];
        oSpan.style.display="block";
    },function () {
        var oSpan=this.getElementsByTagName("span")[0];
        oSpan.style.display="none";
    });

    $("#main_left li div").click(function () {
        $("#main_left li div").removeClass("main_left_active");
        this.className="main_left_div main_left_active";
    });
    loadFoodData();
    loadActicleData();
    loadVideoData();
    indexBodySizeChangeX();
    $("#index_title_more").click(function () {
        $("#mainDiv").animate({left:"-120px"});
        $("#mainLeftDiv").animate({left:bodyWidth-120+"px"});
    });
    $("#mainDiv").click(function () {
        if (parseInt($("#mainDiv").css("left"))<0){
            $("#mainDiv").animate({left:"0"});
            $("#mainLeftDiv").animate({left:bodyWidth+"px"});
        }
    });
    $("#mainLeftDiv").css("height",$("#mainDiv").css("height"));
}

function indexBodySizeChangeX() {
    bodyWidth=document.body.clientWidth;
    changeTabbarFrame(bodyWidth);
    $("#mainDiv").css("left","0");
    $("#mainLeftDiv").css("left",bodyWidth+"px");
    if (bodyWidth<640){
        $("#main_left").css("display","none");
        $("#div1_img1").css("width",bodyWidth+"px");
        $("#div1_img2").css("width","50%");
        changePhoneFoodFrameX();
        changePhoneFollowFrameX();
        changePhoneVideoFrameX();
        changePhoneActicleFrameX();
        changePhoneFootFrameX();
    }else {
        $("#main_left").css("display","block");
        if (bodyWidth<1440){
            $("#div1_img1").css("width","auto").css("marginLeft",(bodyWidth-1440)/2+"px");
        }else {
            $("#div1_img1").css("width","auto").css("marginLeft","auto");
        }
        $("#div1_img2").css("width","320px");
        changeInternetFoodFrameX();
        changeInternetFollowFrameX();
        changeInternetVideoFrameX();
        changeInternetActicleFrameX();
        changeInternetFootFrameX();
    }
    var img1Height=parseInt($("#div1_img1").css("height"));
    $("#div1_img2").css("marginTop",-((img1Height+parseInt($("#div1_img2").css("height")))/2)+"px");
    $("#mainLeftDiv").css("height",$("#mainDiv").css("height"));
}

function loadFoodData() {
    var array=[
        {
            "foodtitle":"BLK",
            "foodContent":"多功能健康饮料",
            "foodImg":"img/foot_1.png"
        },
        {
            "foodtitle":"TOXIC WASTE",
            "foodContent":"世界上最酸的糖",
            "foodImg":"img/foot_2.png"
        },
        {
            "foodtitle":"薯片礼盒",
            "foodContent":"随机x6",
            "foodImg":"img/foot_3.png"
        }
    ];
    var oUl=document.getElementById("food_ul");
    for (var i=0;i<array.length;i++){
        var obj=array[i];
        var oLi=document.createElement("li");

        var oContentDiv=document.createElement("div");
        oContentDiv.className="food_content";

        var oH2=document.createElement("h2");
        oH2.className="food_h2";
        oH2.innerHTML=obj.foodtitle;
        oContentDiv.appendChild(oH2);

        var oH5=document.createElement("h5");
        oH5.className="food_h5";
        oH5.innerHTML=obj.foodContent;
        oContentDiv.appendChild(oH5);

        var oA=document.createElement("a");
        oA.innerHTML="SEE MORE";
        oA.className="foo_oA";

        var oAdiv=document.createElement("div");
        oAdiv.className="food_oADiv";
        oA.appendChild(oAdiv);
        oContentDiv.appendChild(oA);

        oLi.appendChild(oContentDiv);

        var oImg=document.createElement("img");
        oImg.className="food_img";
        oImg.src=obj.foodImg;
        oLi.appendChild(oImg);

        oUl.appendChild(oLi);
    }
}

function changePhoneFoodFrameX() {
    $("#food_ul li").css("width","100%");
    $(".food_h2").css("fontSize","36px");
    $(".food_h5").css({
        fontSize:"18px",
        marginTop:"8px",
        marginBottom:"24px"
    });
    $(".foo_oA").css("fontSize","14px");
}

function changeInternetFoodFrameX() {
    $("#food_ul li").css("width","50%");
    $(".food_h2").css("fontSize",bodyWidth/20+"px");
    $(".food_h5").css({
        fontSize:bodyWidth/35 +"px",
        marginTop:"16px",
        marginBottom:"48px"
    });
    $(".foo_oA").css("fontSize","28px");
}

function changePhoneFollowFrameX() {
    $("#div3").css("height","521px");
    $("#follow_first").css({
        height:"260px",
        width:"150px"
    });
    $(".follow_p1").css({
        fontSize:"36px",
        marginTop:"60px",
        marginBottom:"16px"
    });
    $(".follow_p2").css({
        fontSize:"14px"
    });
    $(".follow_div").css({
        width:"112px",
        height:"40px",
        lineHeight:"40px",
        fontSize:"18px",
        border:"4px solid #b575ff"
    });
}

function changeInternetFollowFrameX() {
    $("#div3").css("height","1041px");
    $("#follow_first").css({
        height:"520px",
        width:"300px"
    });
    $(".follow_p1").css({
        fontSize:"64px",
        marginTop:"180px",
        marginBottom:"40px"
    });
    $(".follow_p2").css({
        fontSize:"28px"
    });
    $(".follow_div").css({
        width:"224px",
        height:"80px",
        lineHeight:"80px",
        fontSize:"36px",
        border:"8px solid #b575ff"
    });
}

function loadVideoData() {
    var array=[
        {
            "img":"img/video_1.png"
        },
        {
            "img":"img/video_2.png"
        },
        {
            "img":"img/video_3.png"
        },
        {
            "img":"img/video_4.png"
        },
        {
            "img":"img/video_5.png"
        },
        {
            "img":"img/video_6.png"
        }
    ]
    var oUl=document.getElementById("index_video_ul");
    for (var i=0;i<array.length;i++){
        var obj=array[i];
        var oLi=document.createElement("li");

        var oImg=document.createElement("img");
        oImg.src=obj.img;
        oLi.appendChild(oImg);

        oUl.appendChild(oLi);
    }
}

function changePhoneVideoFrameX() {
    var liWidth=0;
    if (bodyWidth<=416){
        liWidth=(bodyWidth-56)/2;
    }else {
        liWidth=180;
    }
    $("#index_video_ul").css({
            marginLeft:"8px"
    });
    $("#index_video_ul").css("width",(liWidth+20)*2+"px");

    $("#index_video_ul li").css({
        height:liWidth+"px",
        width:liWidth+"px",
        marginLeft:"10px",
        marginRight:"10px"
    });
    $("#index_video_ul li img").css("width",$("#index_video_ul li").css("width"));
    $("#index_video_more_div").css({
        border:"4px solid #fcde89",
        width:"122px",
        height:"36px",
        fontSize:"18px",
        lineHeight:"36px",
        marginTop:"20px",
        marginBottom:"32px"
    });
}

function changeInternetVideoFrameX() {
    var liWidth=0;
    if (bodyWidth<=1216){
        liWidth=(bodyWidth-176)/3;
        $("#index_video_ul").css({
            marginLeft:"8px"
        })
    }else {
        liWidth=360;
        $("#index_video_ul").css({
            marginLeft:(bodyWidth-1200)/2+"px"
        })
    }
    $("#index_video_ul").css("width",(liWidth+40)*3+"px");
    $("#index_video_ul li").css({
        height:liWidth+"px",
        width:liWidth+"px",
        marginLeft:"20px",
        marginRight:"20px"
    });
    $("#index_video_ul li img").css("width",$("#index_video_ul li").css("width"));
    $("#index_video_more_div").css({
        border:"8px solid #fcde89",
        width:"244px",
        height:"72px",
        fontSize:"36px",
        lineHeight:"72px",
        marginTop:"36px",
        marginBottom:"64px"
    });
}

function loadActicleData() {
    var array=[
        {
            dateString:"2016-11-7",
            titleString:"你小时候天天吃!然而老美却嚼不动的这种中国糖",
            content:"eafcaead afeae fryt hge thw rejdo iser gb rrwgurudkgv dsuduf hrufrufdju afeqw asas sacfae asfaew fagvsrv gwrgefa ef ea  efaade fedv…"
        },
        {
            dateString:"2016-11-4",
            titleString:"你小时候天天吃!然而老美却嚼不动的这种中国糖",
            content:"eafcaead afeae fryt hge thw rejdo iser gb rrwgurudkgv dsuduf hrufrufdju afeqw asas sacfae asfaew fagvsrv gwrgefa ef ea  efaade fedv…"
        }
    ];
    var arrayLength=array.length;
    var i=0;
    var oUl=document.getElementById("index_article");
    for (i=0;i<arrayLength;i++){
        var obj=array[i];

        var oLi=document.createElement("li");

        var oDiv0=document.createElement("div");
        oDiv0.className="date0"


        var dateArray=getDate(obj.dateString);
        var oDiv=document.createElement("div");
        oDiv.className="dateDiv";

        var oP1=document.createElement("p");
        oP1.className="dayP";
        oP1.innerHTML=dateArray[2];

        var oP2=document.createElement("p");
        oP2.className="mouthP";
        oP2.innerHTML=getMouth(dateArray[1]);

        oDiv.appendChild(oP1);
        oDiv.appendChild(oP2);
        oDiv0.appendChild(oDiv);

        var oDiv1=document.createElement("div");
        oDiv1.className="dateLine";
        oDiv0.appendChild(oDiv1);

        oLi.appendChild(oDiv0);

        var titleP=document.createElement("p");
        titleP.className="titleP";
        titleP.innerHTML=obj.titleString;
        oLi.appendChild(titleP);

        var contentP=document.createElement("p");
        contentP.className="contentP";
        contentP.innerHTML=obj.content;
        oLi.appendChild(contentP);

        var oA=document.createElement("a");
        oA.innerHTML="Read more";
        oA.className="acticleA";
        oLi.appendChild(oA);

        oUl.appendChild(oLi);
    }
}

function changePhoneActicleFrameX() {
    $(".acticle_title").css({
        marginLeft:"24px",
        marginTop:"32px",
        fontSize:"14px"
    });
    $(".acticle_content").css({
        marginLeft:"24px",
        marginRight:"24px",
        marginTop:"16px",
        fontSize:"12px"
    });
    $(".dateDiv").css({
        width:"44px",
        height:"56px"
    });
    $(".dayP").css({
        height:"20px",
        lineHeight:"20px",
        fontSize:"20px",
        marginTop:"12px"
    });
    $(".mouthP").css({
        height:"14px",
        lineHeight:"14px",
        fontSize:"14px",
        marginTop:"8px"
    });
    $(".dateLine").css({
        width:"46px",
        height:"6px"
    });
    $("#index_article").css({
        marginLeft:"24px",
        marginTop:"24px",
        marginRight:"24px"
    });
    $("#index_article li").css({
        width:bodyWidth-48+"px",
    });
    $(".titleP").css({
        marginLeft:"70px",
        fontSize:"16px"
    });
    $(".contentP").css({
        marginLeft:"70px",
        marginBottom:"24px",
        fontSize:"12px"
    });
    $(".acticleA").css({
        marginLeft:"70px"
    });
}

function changeInternetActicleFrameX() {
    $(".acticle_title").css({
        marginLeft:"48px",
        marginTop:"64px",
        fontSize:"28px"
    });
    $(".acticle_content").css({
        marginLeft:"48px",
        marginRight:"48px",
        marginTop:"32px",
        fontSize:"24px"
    });
    $(".dateDiv").css({
        width:"92px",
        height:"118px"
    });
    $(".dayP").css({
        height:"24px",
        lineHeight:"24px",
        fontSize:"24px"
    });
    $(".mouthP").css({
        height:"28px",
        lineHeight:"28px",
        fontSize:"28px",
        marginTop:"24px"
    });
    $(".dateLine").css({
        width:"94px",
        height:"12px"
    });
    $("#index_article").css({
        marginLeft:"48px",
        marginTop:"48px",
        marginRight:"48px"
    });
    $("#index_article li").css({
        width:(bodyWidth-96)/2+"px",
    });
    $(".titleP").css({
        marginLeft:"114px",
        fontSize:"28px"
    });
    $(".contentP").css({
        marginLeft:"114px",
        marginBottom:"48px",
        fontSize:"24px"
    });
    $(".acticleA").css({
        marginLeft:"114px"
    });
}

function getDate(string) {
    var dateArray=string.split("-");
    return dateArray;
}
function getMouth(str) {
    if (str=="1"){
        return "JAN";
    }else if (str=="2"){
        return "FEB";
    }else if (str=="3"){
        return "MAR";
    }else if (str=="4"){
        return "APR";
    }else if (str=="5"){
        return "MAY";
    }else if (str=="6"){
        return "JUN";
    }else if (str=="7"){
        return "JUL";
    }else if (str=="8"){
        return "AUG";
    }else if (str=="9"){
        return "SEP";
    }else if (str=="10"){
        return "OCT";
    }else if (str=="11"){
        return "NOV";
    }else{
        return "DEC";
    }
}

function changePhoneFootFrameX() {
    $("#div6 ul").css({
        width:"224px",
        marginLeft:"48px",
        marginTop:"24px"
    });
    $("#div6 ul li").css({
        height:"32px",
        width:"32px",
        marginLeft:"12px",
        marginRight:"12px"
    });
    $(".img_div").css({
        marginLeft:"60px",
        marginBottom:"36px",
        marginTop:"24px",
        width:"32px",
        height:"32px"
    });
    $("#div6 p").css({
        marginTop:"33px",
        fontSize:"14px"
    });
}

function changeInternetFootFrameX() {
    $("#div6 ul").css({
        width:"448px",
        marginLeft:"96px",
        marginTop:"48px"
    });
    $("#div6 ul li").css({
        height:"64px",
        width:"64px",
        marginLeft:"24px",
        marginRight:"24px"
    });
    $(".img_div").css({
        marginLeft:"120px",
        marginBottom:"72px",
        marginTop:"48px",
        width:"64px",
        height:"64px"
    });
    $("#div6 p").css({
        marginTop:"66px",
        fontSize:"28px"
    });
}