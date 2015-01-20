MutationObserver = window.MutationObserver || window.WebKitMutationObserver
var observer = new MutationObserver(function(mutations, observer) {
    jQuery(".UFILikeLink").each(function() {
        if(this.title == "Like this" || this.title == "覺得這很讚") {
            $(this).children("span").html("朕知道了")
        }
        else if(this.title == "Unlike this" || this.title == "收回讚") {
            $(this).children("span").html("朕也是看報紙才知道")
        }
    })
    jQuery(".uiLinkButtonInput").each(function() {
        if (this.value == "Comment" || this.value == "留言") {
            this.value = "卿家可知？"
        }
    })
    jQuery(".share_action_link").each(function() {
        if ($(this).text() == "Share" || $(this).text() == "分享") {
            $(this).text("宣旨")
        }
    })
})

observer.observe(document, {
    subtree: true,
    attributes: true
})
