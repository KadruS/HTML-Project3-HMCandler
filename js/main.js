const menu = document.getElementById('menu')
const menuList = document.getElementById('menu__list');

// menu.onclick = function() {
//     const menuIsHidden = menuList.style.display == '' || menuList.style.display == 'none';
//     menuList.style.display = menuIsHidden ? 'flex' : 'none'
// }

menu.addEventListener('click', () => {
    menuList.classList.toggle('menu--open')
})