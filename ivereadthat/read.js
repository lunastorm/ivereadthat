MutationObserver = window.MutationObserver || window.WebKitMutationObserver
var observer = new MutationObserver(function(mutations, observer) {
    jQuery(".UFILikeLink").each(function() {
        if($(this).text() == "Like" || $(this).text() == "讚") {
            $(this).text("朕知道了")
        }
        else if($(this).text() == "Unlike" || $(this).text() == "收回讚") {
            $(this).text("朕也是看報紙才知道")
        }
    })
})

observer.observe(document, {
    subtree: true,
    attributes: true
})
