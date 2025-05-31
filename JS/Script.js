const navbar = document.querySelector('.navbar-container');

document.querySelector('#menu-btn').onclick = () => {
    navbar .classList.toggle('active');
    favitem.classList.remove('active');
}

const favitem = document.querySelector('.fav-item-container');

document.querySelector('#fav-btn').onclick = () => {
    favitem.classList.toggle('active');
    navbar.classList.remove('active');
}


window .onscroll = () =>{
    navbar .classList .remove('active');
    favitem.classList.remove('active');
}

/* ***** LOGIN & SIGNUP ***** */

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const userbtn = document.querySelector('#userbtn');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

userbtn.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

