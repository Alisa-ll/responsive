$(function(){
    $(".hdMenu").click(function(){
        $(".bodyBg").toggle();
        $(this).toggleClass("active");
        $(".hdNav").slideToggle();
    })
    $(".bodyBg").click(function(){
        $(".hdMenu").removeClass("active");
        $(".hdNav").slideUp();
        $(this).hide();
    })
    // 当前页面高亮显示
    var path = location.href.split("/")[location.href.split("/").length-1].substr(0,4);
    console.log(path)
    $(".hdNav li a[href^='"+path+"']").parent().addClass("active")

    // 监听页面宽度
    $(window).resize(function() {
        if($(this).width()>992) {
            $(".bodyBg").hide();
            $(".hdNav").show();
            $(".hdMenu").removeClass("active");
        } else {
            $(".hdNav").hide();
        }
    })
})