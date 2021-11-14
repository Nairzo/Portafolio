let menu = document.getElementById('menu');
let menu_bar = document.getElementById('menu-bar');

menu_bar.addEventListener('click', function(){
    menu.classList.toggle('menu-toogle')
});

var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);