const mobMenu = document.querySelector('.backdrop');
const burgerBtn = document.querySelector('.burger-menu');
console.log(burgerBtn);


const showHideMenu = () => {
    mobMenu.classList.toggle('is-open')
};

burgerBtn.addEventListener('click', showHideMenu);


