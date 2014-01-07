MutationObserver = window.MutationObserver || window.WebKitMutationObserver
var observer = new MutationObserver(function(mutations, observer) {
    jQuery(".UFILikeLink").each(function() {
        if($(this).text() == "Like" || $(this).text() == "讚") {
            $(this).text("朕知道了")
        }
        else if($(this).text() == "Unlike" || $(this).text() == "收回讚") {
            $(this).text("朕也是看報紙才知道")
        }
    });

    jQuery(".uiLinkButtonInput").each(function() {
        if ($(this).attr("value") == "Comment" || $(this).text("value") == "留言") {
            $(this).attr("value", "卿家可知？")
        }
    });

    jQuery(".share_action_link").each(function() {
        if ($(this).text() == "Share" || $(this).text() == "分享") {
            $(this).text("宣旨")
        }
    });
})

observer.observe(document, {
    subtree: true,
    attributes: true
})
