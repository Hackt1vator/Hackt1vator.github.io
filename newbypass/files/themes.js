var appClasses = document.getElementById("app").classList;
for (var pos = appClasses.length - 1; pos >= 0; --pos)
{
    if (appClasses[pos].startsWith('theme-'))
        appClasses.remove(appClasses[pos]);
}

var selectedTheme = 'dark';
var cookies = document.cookie.split(/; */);
for (var i = 0; i < cookies.length; i++)
{
    var name = cookies[i].substring(0, cookies[i].indexOf('='));
    var value = cookies[i].substring(cookies[i].indexOf('=') + 1);

    if (name == "theme")
    {
        appClasses.add('theme-' + value);
        selectedTheme = value;
    }
}

if (selectedTheme == 'dark')
    document.body.style.backgroundColor = 'black';
else
    document.body.style.backgroundColor = 'white';
