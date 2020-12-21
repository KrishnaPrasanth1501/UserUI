Tawk_API = Tawk_API || {};
Tawk_API.onStatusChange = function (status){
if(status === 'online')
{
document.getElementById('tawkbutton').innerHTML = '<a class="nav-link" href="javascript:void(Tawk_API.toggle())">May I help you</a>';
}
else if(status === 'away')
{
document.getElementById('tawkbutton').innerHTML = 'We are currently away';
}
else if(status === 'offline')
{
document.getElementById('tawkbutton').innerHTML = 'Live chat is Offline';
}
};
