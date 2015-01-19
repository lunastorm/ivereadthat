MutationObserver = window.MutationObserver || window.WebKitMutationObserver
var observer = new MutationObserver(function(mutations, observer) {

    jQuery("[title='覺得這很讚']").each(function() {
        $(this).text("朕知道了");
    });

    jQuery("[title='收回讚']").each(function() {
        $(this).text("朕也是看報紙才知道");
    });

    jQuery("[value='留言']").each(function() {
        $(this).attr("value", "卿家可知？");
    });

    jQuery(".share_action_link").each(function() {
        if ($(this).text() == "Share" || $(this).text() == "分享") {
            $(this).text("宣旨");
        }
    });
})

observer.observe(document, {
    subtree: true,
    attributes: true
})
