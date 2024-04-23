const mobMenu = document.querySelector('.backdrop');
const burgerBtn = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.mobile-menu-btn')
const body = document.querySelector('body');
console.log(burgerBtn);


const showHideMenu = () => {
    mobMenu.classList.toggle('is-open');
    body.classList.toggle('body-is-hidden');
};

burgerBtn.addEventListener('click', showHideMenu);
closeBtn.addEventListener('click', showHideMenu);

document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => { 
    mobMenu.classList.remove('is-open');
    body.classList.remove('body-is-hidden');
}))