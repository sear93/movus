var opener = document.querySelector('.menu-opener')
var menu = document.querySelectorAll('.main-nav')[0]

var openMenu = function() {
    menu.classList.toggle('opened')
}
opener.addEventListener('click', openMenu)




var active = document.querySelectorAll('li');

for (i=0; i < active.length; i++) {
    active[i].addEventListener('click', clickButton)
}

function clickButton() {
    for(i=0; i<active.length;i++) {
        active[i].classList.remove('active');
    }
    this.classList.add('active');
}