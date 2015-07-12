MutationObserver = window.MutationObserver || window.WebKitMutationObserver
var observer = new MutationObserver(function(mutations, observer) {
    jQuery(".UFILikeLink").each(function() {
        if(this.dataset.ft == '{"tn":">"}') {
            $(this).html("朕知道了")
        }
        else if(this.dataset.ft == '{"tn":"?"}') {
            $(this).html("朕也是看報紙才知道")
        }
    })
    jQuery(".comment_link > span").each(function() {
		$(this).text("卿家可知？")
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
