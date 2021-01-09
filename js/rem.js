(function (win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        //var rem = width / 6.4; // 将屏幕宽度分成6.4份， 1份为1rem,对应苹果5
        var rem = width / 3.75; // 将屏幕宽度分成1.75份， 1份为1rem，100px，对应苹果678
        docEl.style.fontSize = rem + 'px';
        // console.log(0.14*rem);
    }

    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 10);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 10);
        }
    }, false);

    refreshRem();

})(window);
