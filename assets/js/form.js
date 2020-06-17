var ifrm = document.createElement("iframe");
ifrm.setAttribute("name", "swallow");
document.body.appendChild(ifrm);
ifrm.style.display = 'none';
document.forms[0].target="swallow";
var button = document.querySelectorAll("div[role='button']")[0];
button.addEventListener("click", function()
{
    var x = document.getElementById("abc");
    x.innerHTML = "Hello Thankyou";
}, true); 