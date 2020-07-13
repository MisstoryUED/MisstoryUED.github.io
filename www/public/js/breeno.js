! function(t) { var o = {};

    function i(e) { if (o[e]) return o[e].exports; var n = o[e] = { i: e, l: !1, exports: {} }; return t[e].call(n.exports, n, n.exports, i), n.l = !0, n.exports } i.m = t, i.c = o, i.d = function(e, n, t) { i.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t }) }, i.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, i.t = function(n, e) { if (1 & e && (n = i(n)), 8 & e) return n; if (4 & e && "object" == typeof n && n && n.__esModule) return n; var t = Object.create(null); if (i.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: n }), 2 & e && "string" != typeof n)
            for (var o in n) i.d(t, o, function(e) { return n[e] }.bind(null, o)); return t }, i.n = function(e) { var n = e && e.__esModule ? function() { return e.default } : function() { return e }; return i.d(n, "a", n), n }, i.o = function(e, n) { return Object.prototype.hasOwnProperty.call(e, n) }, i.p = "", i(i.s = 13) }({ 13: function(e, n, t) { t(14), e.exports = t(15) }, 14: function(e, n) { WOW.prototype.offsetTop = function(e) { return $(this.config.scrollContainer || window).scrollTop() + e.getBoundingClientRect().top }, WOW.prototype.isVisible = function(e) { var n, t, o, i, a; return t = e.getAttribute("data-wow-offset") || this.config.offset, i = (a = this.config.scrollContainer && void 0 !== this.config.scrollContainer.scrollTop ? this.config.scrollContainer.scrollTop : window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - t, n = (o = this.offsetTop(e)) + e.clientHeight, o <= i && a <= n }; var h = {},
            g = {},
            v = {},
            m = 2 * parseInt(document.documentElement.style.fontSize),
            y = 350;

        function t(e, n, t, o) { var i = $(document).scrollTop(),
                a = $(window).height(),
                r = $(n).offset().top,
                s = document.querySelector(n).getBoundingClientRect().height,
                c = document.querySelector(n + " .breeno-even").getBoundingClientRect().height,
                l = r + s,
                d = i + a,
                f = i + a / 2; if (r + s / 2 - 100 < f && i < r + 100 && !$(n + " .breeno-even").hasClass("into-view-middle") && ($(n + " .breeno-even").addClass("into-view-middle"), setTimeout(function() { v[n + " .even-right"] = parseInt($(n + " .even-right").css("transform").split(",").slice(-1)[0]) || 0, $(n + " .even-right").css("transition", "transform .8s cubic-bezier(.39,.575,.565,1)"), h[n + " .even-right"] = f }, o), ".space" === n && setTimeout(function() { $(n + " video")[0].play() }, 500)), window.WebGLRenderingContext && l < d && s <= c) { var u = d - l; if (u < m && s <= g[n] + m / 2) $(n).css("height", g[n] + u / 2);
                else { var p = s + d - l - m;
                    c < p && (p = c), $(n).css("height", p) } } if (".space" !== n && "1" === $(n + " .section-description").css("opacity") && Math.abs(f - h[n + " .even-right"]) < y) {-1 === $(n + " .even-right").attr("style").indexOf("transform") && (h[n + " .even-right"] = f); var b = v[n + " .even-right"] - (f - h[n + " .even-right"]) / t;
                $(n + " .even-right").css({ transform: "translateY(" + b + "px)" }) } }

        function o(e, n) { var t = $(document).scrollTop(),
                o = $(window).height(),
                i = $(n).offset().top + document.querySelector(n).getBoundingClientRect().height / 2,
                a = t + o / 2;
            (i - 200 < a && a < i + 200 && !$(n + ".breeno-odd").hasClass("into-view-middle") || "1" === $(n + " .fadeInUp").css("opacity") && "visible" === $(n + " .fadeInUp").css("visibility")) && $(n + ".breeno-odd").addClass("into-view-middle") }

        function i(e) { $(document).scrollTop();! function() { var e = $(document).scrollTop(),
                    n = document.querySelector(".banner").getBoundingClientRect().height,
                    t = document.querySelector(".banner-oval").getBoundingClientRect().height + 350,
                    o = 1 === parseFloat(($(".banner-text-top").css("transform") || "").split(",")[5]); if (e < n && o) { var i = t / 4;
                    h[".banner-gif"] || (h[".banner-gif"] = $(".banner-gif").offset() ? $(".banner-gif").offset().top : 0, h[".banner-text"] = $(".banner-text").offset().top), i < e ? ($(".banner-gif").css("opacity", 1 - (e - i) / t), $(".banner-text").css("opacity", 1 - (e - i) / (t + 50)), $(".banner-oval").css("opacity", 1 - (e - i) / (t + 50))) : ($(".banner-gif").css({ opacity: 1, top: h[".banner-gif"] + e }), $(".banner-text").css({ opacity: 1, top: h[".banner-text"] + e }), $(".banner-oval").css("opacity", 1)) } }(), t(0, ".goods", 2, 2710), o(0, ".quick"), t(0, ".screen", 3.5, 950), o(0, ".voice"), t(0, ".advice", 4, 560), o(0, ".drive"), t(0, ".space", 4, 2200) } $(".section-button-more").map(function(e, t) { $(t).on("click", function() { var e = $(t).data("name");
                console.log(e); var n = "." + e + "-modal";
                $("body").css("overflow", "hidden"), $(n + "  [lazy]").map(function(e, n) { $(n).attr("src") || $(n).attr("src", $(n).attr("data-src")), $(n).is("video") && !$(n).attr("poster") && $(n).attr("poster", $(n).attr("data-poster")) }), $(n).css({ height: $(window).height(), display: "block", visibility: "visible", width: $(window).width(), "animation-name": "fadeInUpBreeno" }),
                    function(e, n) { new WOW({ animateClass: "animated", boxClass: n + "-modal-wow", offset: 30, live: !0, scrollContainer: e, callback: function(e) { var n = $(e).find("video");
                                0 < n.length && setTimeout(function() { n[0].play() }, 1500) } }).init() }(n, e), $(n).addClass("animated"), setTimeout(function() { $(n + " .breeno-modal-close").addClass("breeno-close-active") }, 1e3) }) }), $(window).resize(function() { $(".breeno-modal").each(function(e, n) { "block" === $(n).css("display") && $(n).css({ width: $(window).width(), height: $(window).height() }) }) }), $(".breeno-modal-close").map(function(e, n) { $(n).on("click", function() { $(".breeno-modal").fadeOut(400), setTimeout(function() { $("body").css("overflow", "auto") }, 300), $(".breeno-modal-close").removeClass("design-close-active") }) }), $(document).ready(function() { new WOW({ animateClass: "animated", offset: 30, live: !0, callback: function(e) { var n = $(e);
                        n.hasClass("banner-oval") && function() { var n = new Image,
                                t = +new Date;
                            n.src = "../public/img/breeno/banner-gif.gif?" + (new Date).getTime(), n.className = "banner-gif", n.onload = function e() { 600 < +new Date - t ? (document.querySelector(".banner").appendChild(n), setTimeout(function() { $(".banner-text").addClass("banner-text-show") }, 2100)) : setTimeout(function() { e() }, 50) } }(), n.hasClass("privacy-icon-wrapper") && n.addClass("into-view") } }).init(),
                function() { if (g[".goods"] = $(".goods").height(), g[".screen"] = $(".screen").height(), g[".advice"] = $(".advice").height(), g[".space"] = $(".space").height(), window.WebGLRenderingContext && Object.assign)
                        for (var e = document.querySelectorAll("canvas"), n = 0; n < e.length; n++) new GlslCanvas(e[n]);
                    else $("div.breeno-even").css("background", 'url("../img/breeno/breeno-even-bg.png") no-repeat center') }(), $(document).on("scroll", i), $(document).trigger("scroll"), i(), $(".breeno-modal .card-play-mask").bind("click", function() { var e = $(this).parent().find("video")[0];
                    $(this).parent().find(".card-play-button").addClass("card-play-hide"), $(this).parent().find(".card-play-mask").addClass("card-play-hide"), e.play(), e = null }), $(".breeno-modal .card-play-button").bind("click", function() { var e = $(this).parent().find("video")[0];
                    $(this).parent().find(".card-play-button").addClass("card-play-hide"), $(this).parent().find(".card-play-mask").addClass("card-play-hide"), e.play(), e = null }), $(".breeno-modal video").each(function(e, n) {
                    (n = $(n)).bind("ended", function() { var e = n.parent();
                        e.find(".card-play-button").removeClass("card-play-hide"), e.find(".card-play-mask").removeClass("card-play-hide") }) }), $(".breeno-modal .card-play-button").addClass("card-play-hide"), $(".breeno-modal .card-play-mask").addClass("card-play-hide") }) }, 15: function(e, n, t) { e.exports = t.p + "/css/breeno.css" } });