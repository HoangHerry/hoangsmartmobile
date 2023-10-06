var icon_menu = document.querySelector('.menu_icon')
var menu_introduce = document.querySelector('.introduce')
icon_menu.addEventListener('click',function(e){
    menu_introduce.classList.toggle('display')

})
document.addEventListener('click', function(e){
    if (!icon_menu.contains(e.target)) {
        menu_introduce.classList.remove('display');
    }
    else if(menu_introduce.contains(e.target)){
        menu_introduce.classList.add('display');
    }
})
menu_introduce.addEventListener('click', function (e) {
    e.stopPropagation();
});
