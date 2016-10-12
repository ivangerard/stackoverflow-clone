function getItems() {

    $.get({
        url: "http://localhost:8080/api/blogs",
        success: function(result) {

            var list = $("tbody#item-list")

            list.empty()
            for (var idx = 0; idx < result.length; idx++) {
                //var html = `<li><h3>${result[idx].contributor}</h3></li><li><h3>${result[idx].article}</h3></li>`
                var html = `<tr><td>${result[idx].contributor}</td><td>${result[idx].article}</td></tr>`
                list.append(html)
            }
            console.log(result);
        }
    })
}

function postItem(result) {

    $.post({
        url: "http://localhost:8080/api/blogs",
        data: {
            "article": $("#article").val().trim(),
            "contributor": $("#contributor").val().trim()
        },
        success: function(result) {
            getItems()
        }
    })
}

$(function() {
    getItems()
    $("#form-item").unbind().on("submit", function(event) {
        event.preventDefault()
        postItem()
    })
})
