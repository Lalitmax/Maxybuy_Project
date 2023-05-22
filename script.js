const wrapper = document.querySelector('.wrapper');
// Registeration Event
const registerLink = document.querySelector('.register-link');
registerLink.addEventListener('click' ,()=>{
    wrapper.classList.add('active');
});

// Login Event
const loginLink = document.querySelector('.login-link');
loginLink.addEventListener('click' ,()=>{
    wrapper.classList.remove('active');
});

// Button pop up Event
const btnPopup = document.querySelector('.btn-popup');
btnPopup.addEventListener('click' ,()=>{
    wrapper.classList.add('active-popup');
});

// Close icon Event
const iconClose = document.querySelector('.icon-close');
iconClose.addEventListener('click' ,()=>{
    wrapper.classList.remove('active-popup');
});

function myFunction() {
    var x = document.getElementById("click");
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);}