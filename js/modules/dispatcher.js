var Dispatcher = {

    pages: {},

    content: "#content",

    dispatchPage: function (url) {
        var file = this.pages[url] || url;

        $.ajax({
            url: file,

            success: function (data) {
                $(Dispatcher.content).html(data);
            },

            error: function () {
                $(Dispatcher.content).html(
                    "<p>failed to dispatch the page</p>"
                );
            }
        });
    },

    navigate: function (url) {
        history.pushState(null, "", url);
        this.dispatchPage(url);
    },

    start: function () {
        var self = this;

        $.getJSON("/data/dispatch.json", function (pages) {
            self.pages = pages;
            self.dispatchPage(window.location.pathname);
        });
    }
};