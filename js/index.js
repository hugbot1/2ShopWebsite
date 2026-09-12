$(document).ready(function () {

    $(document).on("click", "a[data-ajax]", function (event) {
        event.preventDefault();

        Dispatcher.navigate($(this).attr("href"));
    });

    window.onpopstate = function () {
        Dispatcher.dispatchPage(window.location.pathname);
    };

    Dispatcher.start();
});