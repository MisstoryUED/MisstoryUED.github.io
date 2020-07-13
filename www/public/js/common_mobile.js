var agent = window.navigator.userAgent.toLowerCase();
var islessIE = false;
var ismobile = false;
var isiphone = false;
var scroll_top = 0;
var scroll_timer;
var cur = 0;

if (agent.indexOf("msie 8") != -1 || agent.indexOf("msie 7") != -1 || agent.indexOf("msie 6") != -1) {
    islessIE = true;
}
if (agent.indexOf("mobile") != -1) {
    ismobile = true;
}
if (agent.indexOf('iphone') != -1 || agent.indexOf('ipad') != -1 || (!!agent.match(/\(i[^;]+;( u;)? cpu.+mac os x/))) {
    isiphone = true;
}

//ColorOS 3.0视频
function playvideo(autoplay) {
    if (autoplay == null) {
        autoplay = 0;
    }
    $("#videopop").html('<iframe height=180 width=320 src="http://v.qq.com/iframe/player.html?vid=w0302r1aqny&tiny=0&auto=' + autoplay + '" frameborder=0 allowfullscreen></iframe><div class="videopopclose" onclick="closevideo()"></div>');
    popvideo();
}

//手机搬家视频
function playclonephonevideo(autoplay) {
    if (autoplay == null) {
        autoplay = 0;
    }
    $("#videopop").html('<iframe height=180 width=320 src="https://v.qq.com/iframe/player.html?vid=d0384tl4ega&tiny=0&auto=' + autoplay + '" frameborder=0 allowfullscreen></iframe><div class="videopopclose" onclick="closevideo()"></div>');
    popvideo();
}

//通信安全视频
function playcleanvideo(autoplay) {
    if (autoplay == null) {
        autoplay = 0;
    }
    $("#videopop").html('<iframe height=180 width=320 src="https://v.qq.com/iframe/player.html?vid=q0348xv259q&tiny=0&auto=' + autoplay + '" frameborder=0 allowfullscreen></iframe><div class="videopopclose" onclick="closevideo()"></div>');
    popvideo();
}

//应用安全视频
function playsafevideo(autoplay) {
    if (autoplay == null) {
        autoplay = 0;
    }
    $("#videopop").html('<iframe height=180 width=320 src="https://v.qq.com/iframe/player.html?vid=b0353ywfa2s&tiny=0&auto=' + autoplay + '" frameborder=0 allowfullscreen></iframe><div class="videopopclose" onclick="closevideo()"></div>');
    popvideo();
}

//支付安全视频
function playpayvideo(autoplay) {
    if (autoplay == null) {
        autoplay = 0;
    }
    $("#videopop").html('<iframe height=180 width=320 src="https://v.qq.com/iframe/player.html?vid=s03589jx5za&tiny=0&auto=' + autoplay + '" frameborder=0 allowfullscreen></iframe><div class="videopopclose" onclick="closevideo()"></div>');
    popvideo();
}

//3.0年终盘点视频
function playpanvideo(autoplay) {
    if (autoplay == null) {
        autoplay = 0;
    }
    $("#videopop").html('<iframe height=180 width=320 src="https://v.qq.com/iframe/player.html?vid=m03677uub2v&tiny=0&auto=' + autoplay + '" frameborder=0 allowfullscreen></iframe><div class="videopopclose" onclick="closevideo()"></div>');
    popvideo();
}

//3.1视频
function play31video(autoplay) {
    if (autoplay == null) {
        autoplay = 0;
    }

    var html = '<video autoplay="autoplay" loop="loop" controls="controls" poster="' + resource + '/public/img/mobile/topic3_1/video_poster.jpg?180329" class="videoplayer" src="' + resource + '/public/img/mobile/topic3_1/video3_1.mp4?180329" width="320px"></video>';
    $("#videopop").html(html + '<div class="videopopclose" onclick="closevideo()"></div>');
    popvideo();
}

function playengine(video_url, video_autoplay, video_html5, width, height, imgUrl, type) {
    if (video_autoplay == null) {
        video_autoplay = 0;
    }
    if($("#videopop").length<1){
        $(document).append('<div id="videopop" class="videopop"></div>');
    }
    if($("#videomask").length<1){
        $(document).append('<div id="videomask" class="videomask"></div>');
    }

    if (video_html5 == 1) {
        var html = '<video autoplay="' + (video_autoplay == 1 ? 'autoplay' : '0') + '" loop="loop" controls class="videoplayer"' + 
        ' poster="' + (imgUrl || '') + '" playsinline="" webkit-playsinline="" >' +
            '<source src="' + video_url + '" type="' + (type || 'video/mp4') + '" /></video>';
        $("#videopop").html(html + '<div class="videopopclose" onclick="closevideo()"></div>');
        $("#videopop").find('video')[0].play();
        $("#videopop").css({
            width: width,
            height: height
        });
    }
    else {
        $("#videopop").html('<iframe height="' + height + '" width="' + width + '" src="' + video_url + '" frameborder=0 allowfullscreen></iframe><div class="videopopclose" onclick="closevideo()"></div>');
    }

    popvideo();
}

/**
 * 微信右上角提示框
 */
function popuptips() {
    $("#downloadtips").height($(document).height());
    $("#downloadtips").show();
}

//弹出视频播放窗口
function popvideo() {
    $("#videomask").height($(document).height());
    // $("#videopop").css("margin-top", -$("#videopop").height() / 2);
    $("#videopop").show();
    $("#videomask").show();

    //禁止滚动条
    document.body.style.overflow = 'hidden';
}
//关闭视频播放窗
function closevideo() {
    $("#videopop").hide();
    $("#videomask").hide();

    // 清空播放器
    $("#videopop").html("");

    //恢复滚动条
    document.body.style.overflow = 'auto';
}

function show_inner_menu() {
    if ($("#inner_menu").is(":hidden")) {
        $("#inner_menu").slideDown("fast");
    }
    else {
        $("#inner_menu").slideUp("fast");
    }
}
/**
 * 判断变量是否为空
 * @param val
 * @returns {boolean}
 */
function isempty(val) {
    return (val == null || val == '' || val == undefined || typeof(val) == typeof(undefined));
}

/*平滑移动*/
function goto(href, offset, time) {
    if (offset == null || offset == undefined) {
        offset = 0;
    }
    if (time == null || time == undefined) {
        time = 1000;
    }

    $('html,body').animate({scrollTop: $(href).offset().top + offset}, time);
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

//cnzz 事件埋点：类别+操作+标签
function cnzzevent(type, operate, tag) {
    //onclick='try{_czc.push(["_trackEvent", "button", "click", "clonephoneall", 1]);}catch(e){}'>
    try {
        _czc.push(["_trackEvent", type, operate, tag, 1]);
    }
    catch (e) {
    }
}
function antiNav(index){
    var isAntiColor = $('#slide>.item:nth-child('+(index+1)+')').data('navcolor');
    if(isAntiColor === 0){
        $('.js-nav').removeClass('nav-anti');
    }else{
        $('.js-nav').addClass('nav-anti');
    }
    
}
$.fn.focus_scroll = function () {
    return this.each(function () {
        var e = $(this), t = e.children(".slide"), n = t.children(), i = n.length,
            r = (e.outerHeight(), e.outerWidth());
        if (i > 1) {
            var o, a, s, l, c = $(function () {
                var e = [];
                return n.each(function () {
                    e.push("<a></a>")
                }), e.join("")
            }()).mouseenter(function () {
                u = $(this).index(), d()
            }).appendTo(e).wrapAll('<div class="slide_status"></div>'), u = 0, d = function () {
                clearTimeout(o), t.stop().animate({marginLeft: u * -r}, 500, function () {
                    u >= i && (u = 0, t.css("marginLeft", u * -r)), 0 > u && (u = i - 1, t.css("marginLeft", u * -r)), c.removeClass("on").eq(u).addClass("on");
                    antiNav(u+1);
                }), o = setTimeout(function () {
                    u++, d()
                }, 4000)
            };
            n.width(r).css("float", "left");
            var f = n.first().clone().css({
                position: "absolute",
                right: -r
            }).appendTo(t), p = n.last().clone().css({position: "absolute", left: -r}).prependTo(t);
            t.width(r * i).on("touchstart mousedown", function (e) {
                clearTimeout(o), a = e.pageX || e.originalEvent.touches[0].pageX, l = !0, s = 0, e.stopPropagation()
            }).on("touchmove mousemove", function (e) {
                return l ? (s = (e.pageX || e.originalEvent.touches[0].pageX) - a, t.css("marginLeft", u * -r + s), "mousemove" == e.type && t.click(function () {
                    return !1
                }), !1) : !1
            }).on("touchend mouseup", function (e) {
                l = !1, s > r / 5 ? u-- : -r / 5 > s && u++, d(), "mouseup" == e.type && Math.abs(s) < 3 && t.off("click"), e.stopPropagation()
            }), t.mouseleave(function () {
                t.mouseup(), s = 0
            }), d(), $(window).resize(function () {
                r = e.outerWidth(), n.width(r), f.width(r).css({right: -r}), p.width(r).css({left: -r}), t.width(r * i), t.css("marginLeft", u * -r)
            })
        }
    });
};

function scroll_navigation() {
    cur = $(window).scrollTop();
    var nav_height = $("#nav_container").height();
    if (typeof(page_scroll) == 'function') {
        page_scroll(cur);
    }
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
        + '  @font-face {'
        + '    font-family: "OPPOSans-M";'
        + '    src: url(' + resource + '/public/font/OPPOSans-M.eot?201911200922#ie-fixed);'
        + '    src:'
        + '      url(' + resource + '/public/font/OPPOSans-M.eot?201911200922#ie-fixed) format("embedded-opentype"),'
        + '      url(' + resource + '/public/font/OPPOSans-M.woff2?201911200922) format("woff2"),'
        + '      url(' + resource + '/public/font/OPPOSans-M.woff?201911200922) format("woff"),'
        + '      url(' + resource + '/public/font/OPPOSans-M.ttf?201911200922) format("truetype");'
        + '    font-style: normal;'
        + '    font-weight: 200;'
        + '  }'
        + '  @font-face {'
        + '    font-family: "OPPOSans-L";'
        + '    src: url(' + resource + '/public/font/OPPOSans-L.eot?201911200922#ie-fixed);'
        + '    src:'
        + '      url(' + resource + '/public/font/OPPOSans-L.eot?201911200922#ie-fixed) format("embedded-opentype"),'
        + '      url(' + resource + '/public/font/OPPOSans-L.woff2?201911200922) format("woff2"),'
        + '      url(' + resource + '/public/font/OPPOSans-L.woff?201911200922) format("woff"),'
        + '      url(' + resource + '/public/font/OPPOSans-L.ttf?201911200922) format("truetype");'
        + '    font-style: normal;'
        + '    font-weight: 200;'
        + '  }'
        + '  @font-face {'
        + '    font-family: "OPPOSans-H";'
        + '    src: url(' + resource + '/public/font/OPPOSans-H.eot?201911200922#ie-fixed);'
        + '    src:'
        + '      url(' + resource + '/public/font/OPPOSans-H.eot?201911200922#ie-fixed) format("embedded-opentype"),'
        + '      url(' + resource + '/public/font/OPPOSans-H.woff2?201911200922) format("woff2"),'
        + '      url(' + resource + '/public/font/OPPOSans-H.woff?201911200922) format("woff"),'
        + '      url(' + resource + '/public/font/OPPOSans-H.ttf?201911200922) format("truetype");'
        + '    font-style: normal;'
        + '    font-weight: 200;'
        + '  }'
        + '</style>;'
    $("head").append(fontSettings);
}

$(document).ready(function () {
        $("#fullpage").bind("click", function () {
            if (!$("#inner_menu").is(":hidden")) {
                $("#inner_menu").slideUp("fast");
            }
        });

        $("#gotop").bind("click", function () {
            $("#fp-nav a").eq(0).trigger("click");
        });

        //初始化视频遮造蒙版
        if ($("#videomask").length <= 0) {
            $(document.body).append('<div class="videomask" id="videomask"></div>');
        }
        //初始化视频容器
        if ($("#videopop").length <= 0) {
            $(document.body).append('<div class="videopop" id="videopop"></div>');
        }

        //初次加载回顶部
        $(window).scroll(function () {
            scroll_navigation();
            scroll_top = cur;
        });

        //触发一次滚动条事件
        scroll_navigation();

        // cnzz 统计
        $("body").append('<div style="display:none;"><script src="https://s95.cnzz.com/z_stat.php?id=1260883154&web_id=1260883154" language="JavaScript"></script></div>');

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
    }
);