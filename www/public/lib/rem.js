(function(win){
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;
    function refreshRem(){
        console.log(1, +new Date())
        var whdef = 100/2560;// 表示1920的设计图,使用100PX的默认值
        var wH = window.innerHeight;// 当前窗口的高度
        var wW = window.innerWidth>=1440?window.innerWidth:1440;;// 当前窗口的宽度
        var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
        docEl.style.fontSize = rem + 'px';
        win.rem=rem;
    }
    refreshRem();
    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);
})(window);