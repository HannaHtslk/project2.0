const mobMenu = document.querySelector('.backdrop');
const burgerBtn = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.mobile-menu-btn')
console.log(burgerBtn);


const showHideMenu = () => {
    mobMenu.classList.toggle('is-open');
    
};

burgerBtn.addEventListener('click', showHideMenu);
closeBtn.addEventListener('click', showHideMenu);

