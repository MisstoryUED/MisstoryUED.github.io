var agent = window.navigator.userAgent.toLowerCase();
var islessIE = false;
var isFirefox = false;
var isSafari = false;
var ismobile = false;
var scroll_top = 0;
var scroll_timer;
var cur = 0;

if (agent.indexOf("msie 8") != -1 || agent.indexOf("msie 7") != -1 || agent.indexOf("msie 6") != -1) {
    islessIE = true;
}
if (agent.indexOf("firefox") != -1) {
    isFirefox = true;
}
if (agent.indexOf("safari") != -1 && agent.indexOf("chrome") == -1) {
    isSafari = true;
}
if (agent.toLowerCase().indexOf("mobile") != -1) {
    ismobile = true;
}


//ColorOS 3.0视频
function playvideo(autoplay) {
    if (autoplay == null) {
        autoplay = 0;
    }
    $("#videopop").html('<iframe height=524 width=860 src="http://v.qq.com/iframe/player.html?vid=w0302r1aqny&tiny=0&auto=' + autoplay + '" frameborder=0 allowfullscreen></iframe><div class="videopopclose" onclick="closevideo()"></div>');
    popvideo();
}

//手机搬家视频
function playclonephonevideo(autoplay) {
    if (autoplay == null) {
        autoplay = 0;
    }
    $("#videopop").html('<iframe height=524 width=860 src="https://v.qq.com/iframe/player.html?vid=d0384tl4ega&tiny=0&auto=' + autoplay + '" frameborder=0 allowfullscreen></iframe><div class="videopopclose" onclick="closevideo()"></div>');
    popvideo();
}

//通信安全视频
function playcleanvideo(autoplay) {
    if (autoplay == null) {
        autoplay = 0;
    }
    $("#videopop").html('<iframe height=524 width=860 src="https://v.qq.com/iframe/player.html?vid=q0348xv259q&tiny=0&auto=' + autoplay + '" frameborder=0 allowfullscreen></iframe><div class="videopopclose" onclick="closevideo()"></div>');
    popvideo();
}

//应用安全视频
function playsafevideo(autoplay) {
    if (autoplay == null) {
        autoplay = 0;
    }
    $("#videopop").html('<iframe height=524 width=860 src="https://v.qq.com/iframe/player.html?vid=b0353ywfa2s&tiny=0&auto=' + autoplay + '" frameborder=0 allowfullscreen></iframe><div class="videopopclose" onclick="closevideo()"></div>');
    popvideo();
}

//支付安全视频
function playpayvideo(autoplay) {
    if (autoplay == null) {
        autoplay = 0;
    }
    $("#videopop").html('<iframe height=524 width=860 src="https://v.qq.com/iframe/player.html?vid=s03589jx5za&tiny=0&auto=' + autoplay + '" frameborder=0 allowfullscreen></iframe><div class="videopopclose" onclick="closevideo()"></div>');
    popvideo();
}

//3.0年终盘点视频
function playpanvideo(autoplay) {
    if (autoplay == null) {
        autoplay = 0;
    }
    $("#videopop").html('<iframe height=524 width=860 src="https://v.qq.com/iframe/player.html?vid=m03677uub2v&tiny=0&auto=' + autoplay + '" frameborder=0 allowfullscreen></iframe><div class="videopopclose" onclick="closevideo()"></div>');
    popvideo();
}

//3.1视频
function play31video(autoplay) {
    if (autoplay == null) {
        autoplay = 0;
    }

    var html = '<video autoplay="autoplay" loop="loop" controls="controls" class="videoplayer" poster="' + resource + '/public/img/topic3_1/video_poster.jpg?180329" src="' + resource + '/public/img/topic3_1/video3_1.mp4?180329" width="860px"></video>';
    $("#videopop").html(html + '<div class="videopopclose" onclick="closevideo()"></div>');
    popvideo();
}

function playengine(video_url, video_autoplay, video_html5, width, height) {
    if (video_autoplay == null) {
        video_autoplay = 0;
    }

    setTimeout(function () {
        if (video_html5 == 1) {
            var html = '<video autoplay="' + (video_autoplay == 1 ? 'autoplay' : '0') + '" loop="loop" controls="controls" class="videoplayer" src="' + video_url + '" style="width:' + width + '"></video>';
            $("#videopop").html(html + '<div class="videopopclose" onclick="closevideo()"></div>');
        }
        else {
            $("#videopop").html('<iframe height="' + height + '" width="' + width + '" src="' + video_url + '" frameborder=0 allowfullscreen class="videoplayer"></iframe><div class="videopopclose" onclick="closevideo()"></div>');
        }
        popvideo();
    },200);
}

//弹出视频播放窗口
function popvideo() {
    // $("#videomask").height($(document).height());
    $("#videopop").removeClass('close');
    // $("#videomask").addClass('open');
    setTimeout(function() {
        $("#videopop").addClass('open');
    });
    setTimeout(function () {
        $(".videopopclose").addClass('video-close-active');
    }, 300)

    //禁止滚动条
    document.documentElement.style.overflow = 'hidden';
}

//关闭视频播放窗
function closevideo() {
    try {
        $("#videopop video")[0].pause();
    }
    catch (e) {
    }
    $("#videopop").removeClass('open');
    setTimeout(function () {
        $("#videomask").removeClass('open');
        $(".videopopclose").removeClass('video-close-active');
    }, 800);

    setTimeout(function () {
        // 清空播放器
        $("#videopop").addClass('close');
        document.documentElement.style.overflow = 'auto';
        $("#videopop").html("");
    }, 800);

    //回复滚动条
}

function dialog(dialog_id) {
    $(".dialog").hide();
    $("#" + dialog_id).show();
    $("#dialogmask").height($(document).height());
    $("#dialogmask").show();
    $("#dialogmask").bind("click", function () {
        $(".dialog").hide();
        $("#dialogmask").hide();
        $("#dialogmask").unbind("click");
    });
}

/**
 * 判断变量是否为空
 * @param val
 * @returns {boolean}
 */
function isempty(val) {
    return (val == null || val == '' || val == undefined || typeof(val) == typeof(undefined));
}

// 超过范围的值只取最大范围
function rangval(val, min, max) {
    try {
        if (val > parseInt(max)) {
            val = max;
        }
        else if (val < parseInt(min)) {
            val = min;
        }
    }
    catch (e) {
        console.log(e.message);
    }
    return val;
}

//cnzz 事件埋点：类别+操作+标签
function cnzzevent(type, operate, tag) {
    //onclick='try{_czc.push(["_trackEvent", "button", "click", "clonephoneall", 1]);}catch(e){}'>
    try {
        _czc.push(["_trackEvent", type, operate, tag, 1]);
    }
    catch (e) {
    }
}

/*平滑移动*/
function goto(href, offset, time) {
    if (offset == null || offset == undefined) {
        offset = 0;
    }
    if (time == null || time == undefined) {
        time = 1000;
    }

    $('html,body').animate({scrollTop: $(href).offset().top + offset}, time, function () {

    });
}

//tab 控制
function tab(ctl, ids) {
    var idsarray = ids.split(',');
    for (var id in idsarray) {
        $('#' + idsarray[id]).removeClass('act');
        $('#' + idsarray[id] + '_sub').hide();
    }
    $(ctl).addClass('act');
    $('#' + $(ctl).attr('id') + '_sub').show();
}

function scroll_navigation() {
    cur = $(window).scrollTop();
    var nav_height = $("#nav_container").height();
    //顶部小导航位置挪动
    if (cur > nav_height) {
        $("#nav_small").css("top", "0px");
    }
    else {
        $("#nav_small").css("top", (nav_height - cur) + "px");
    }

    if (typeof(page_scroll) == 'function') {
        page_scroll(cur);
    }
    //固定的导航栏左右滑动
    if(cur > $('#topic1').height() - 100){
        var scrollLeft = $(window).scrollLeft();
        $("#color_navigator").css("left", '-'+scrollLeft+'px')
    }
}

// 滚轮事件
function scroll_event() {
    scroll_navigation();

    //低版本IE以及safari取消动画
    if (!islessIE && !isSafari) {
        $("div.animate_activited").each(function (i) {
            var top = this.offsetTop;
            $(this).find('.animated').each(function (c) {
                var height = $(this).height();

                //超出范围不产生动作
                if (cur > (top + height * 2) || cur < (top - height - height / 2)) {
                    return;
                }
                var data = JSON.parse($(this).attr("data-animated"));
                var rang = JSON.parse($(this).attr("data-animated-rang"));
                var matrix = JSON.parse($(this).attr("data-animated-cur"));
                var reverse = $(this).attr("data-reverse");
                var transform = "";
                var new_matrix = new Object();
                if ((cur > scroll_top && !reverse) || (cur < scroll_top && reverse)) {
                    //up
                    new_matrix['translateX'] = rangval((parseFloat(matrix.translateX) - parseFloat(data.translateX)), -999, 999);
                    new_matrix['translateY'] = rangval((parseFloat(matrix.translateY) - parseFloat(data.translateY)), rang['minY'], rang['maxY']);
                    new_matrix['rotate'] = rangval((parseFloat(matrix.rotate) - parseFloat(data.rotate)), rang['minRotate'], rang['maxRotate']);
                } else {
                    //down
                    new_matrix['translateX'] = rangval((parseFloat(matrix.translateX) + parseFloat(data.translateX)), -999, 999);
                    new_matrix['translateY'] = rangval((parseFloat(matrix.translateY) + parseFloat(data.translateY)), rang['minY'], rang['maxY']);
                    new_matrix['rotate'] = rangval((parseFloat(matrix.rotate) + parseFloat(data.rotate)), rang['minRotate'], rang['maxRotate']);
                }
                transform = "translateX(" + new_matrix['translateX'] + "px) translateY(" + new_matrix['translateY'] + "px) rotate(" + new_matrix['rotate'] + "deg)"
                $(this).css("transform", transform);
                $(this).attr("data-animated-cur", JSON.stringify(new_matrix));
            });
        });
    }
    scroll_top = cur;
}

function request(paras) {
    var url = location.href;
    var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");
    var paraObj = {}
    for (i=0; j=paraString[i]; i++){
      paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length);
    }
    var returnValue = paraObj[paras.toLowerCase()];
    if(typeof(returnValue)=="undefined"){
      return "";
    }else{
      return returnValue;
    }
  }

function initOpposansFont() {
    var fontSettings = '<style type="text/css">'
    +'  @font-face {'
    +'    font-family: "OPPOSans-M";'
    +'    src: url(' + resource + '/public/font/OPPOSans-M.eot?201911200922#ie-fixed);'
    +'    src:'
    +'      url(' + resource + '/public/font/OPPOSans-M.eot?201911200922#ie-fixed) format("embedded-opentype"),'
    +'      url(' + resource + '/public/font/OPPOSans-M.woff2?201911200922) format("woff2"),'
    +'      url(' + resource + '/public/font/OPPOSans-M.woff?201911200922) format("woff"),'
    +'      url(' + resource + '/public/font/OPPOSans-M.ttf?201911200922) format("truetype");'
    +'    font-style: normal;'
    +'    font-weight: 200;'
    +'  }'
    +'  @font-face {'
    +'    font-family: "OPPOSans-L";'
    +'    src: url(' + resource + '/public/font/OPPOSans-L.eot?201911200922#ie-fixed);'
    +'    src:'
    +'      url(' + resource + '/public/font/OPPOSans-L.eot?201911200922#ie-fixed) format("embedded-opentype"),'
    +'      url(' + resource + '/public/font/OPPOSans-L.woff2?201911200922) format("woff2"),'
    +'      url(' + resource + '/public/font/OPPOSans-L.woff?201911200922) format("woff"),'
    +'      url(' + resource + '/public/font/OPPOSans-L.ttf?201911200922) format("truetype");'
    +'    font-style: normal;'
    +'    font-weight: 200;'
    +'  }'
    +'  @font-face {'
    +'    font-family: "OPPOSans-H";'
    +'    src: url(' + resource + '/public/font/OPPOSans-H.eot?201911200922#ie-fixed);'
    +'    src:'
    +'      url(' + resource + '/public/font/OPPOSans-H.eot?201911200922#ie-fixed) format("embedded-opentype"),'
    +'      url(' + resource + '/public/font/OPPOSans-H.woff2?201911200922) format("woff2"),'
    +'      url(' + resource + '/public/font/OPPOSans-H.woff?201911200922) format("woff"),'
    +'      url(' + resource + '/public/font/OPPOSans-H.ttf?201911200922) format("truetype");'
    +'    font-style: normal;'
    +'    font-weight: 200;'
    +'  }'
    +'</style>;'
    $("head").append(fontSettings);
}

$(document).ready(function () {
    if ($("#videopop").length < 1) {
        $(document.body).append('<div id="videopop" class="videopop close"></div>');
    }
    if ($("#videomask").length < 1) {
        $(document.body).append('<div id="videomask" class="videomask"></div>');
    }
    $("#gotop").bind("click", function () {
        $("#fp-nav a").eq(0).trigger("click");
    });

    //初次加载回顶部
    $(window).scroll(function () {
        /*if (isFirefox) {
            //firefox一次滚动会触发多次
            clearTimeout(scroll_timer);
            scroll_timer = setTimeout("scroll_event()", 300);
            scroll_navigation();
        }
        else {
            scroll_event();
        }*/

        clearTimeout(scroll_timer);
        scroll_timer = setTimeout("scroll_event()", 50);
    });

    //触发一次滚动条事件
    scroll_navigation();

    //初始化视频遮造蒙版
    if ($("#videomask").length <= 0) {
        $(document.body).append('<div class="videomask" id="videomask"></div>');
    }
    //初始化视频容器
    if ($("#videopop").length <= 0) {
        $(document.body).append('<div class="videopop" id="videopop"></div>');
    }

    // cnzz 统计
    $("body").append('<div style="display:none;"><script src="http://s95.cnzz.com/z_stat.php?id=1260883154&web_id=1260883154" language="JavaScript"></script></div>');

    //自动播放视频
    if (window.location.href.toLowerCase().indexOf("clean.html?init=1") != -1) {
        playcleanvideo(1);
    }
    else if (window.location.href.toLowerCase().indexOf("index.html?init=1") != -1) {
        playsafevideo(1);
    }
    else if (window.location.href.toLowerCase().indexOf("index.html?init=2") != -1) {
        playpayvideo(1);
    }
});