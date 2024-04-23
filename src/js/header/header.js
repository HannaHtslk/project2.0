const headerMenuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');



const onMenuClick = () => {
    navigation.classList.toggle('nav-is-visible');
}

headerMenuBtn.addEventListener('click', onMenuClick);