var app = new Framework7({
    root : '#app',
    id : 'iDNSPortal',
    name : 'iDNS Portal',
    theme : 'ios',
    routes : [ {
        path : '(.*)',
        async : function(RouteTo, RouteFrom, Resolve, Reject) {
            Resolve({url : RouteTo.url})
        }
    } ],
    view : {
        animate : true,
        passRouteQueryToRequest : false,
        passRouteParamsToRequest : false,
        xhrCache : false,
        preloadPreviousPage : false,
        iosSwipeBack : false
    },
    navbar : {hideOnPageScroll : false, iosCenterTitle : true}
});

if (typeof document.getElementById('Url') !== 'undefined')
{
    var $$ = Dom7;

    $$("#Url").keypress(function(Event) {
        if (Event.which == 13)
        {
            $$("#Go").trigger("click");
        }
        else
        {
            $$('#Error').hide();
        }
    });

    $$("#Go").on('click', function() {
        var Url = $$('#Url').val();

        if (Url.substring(0, 5) != 'http:' && Url.substring(0, 6) != 'https:')
        {
            Url = 'http://' + Url;
        }

        if (!Url.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{1,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/) &&
            !Url.match(/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}[\s\S]{0,}/))
        {
            $$('#Error').show();
        }
        else
        {
            window.location.href = '/redirect?from=AddressBar&url=' + encodeURIComponent(Url);
        }
        $$("#Url").focus();
    });
    $$("#Url").focus();
}
