document.addEventListener('DOMContentLoaded', function() {
    const signUpLink = document.querySelector('.login-form-subscribe a'); 
    const loginLink = document.querySelector('.sign-up-form-subscribe a'); 
    const loginForm = document.querySelector('#login'); 
    const signUpForm = document.querySelector('#sign-up'); 
    const loginErrorMessage = document.querySelector('#login-error-message'); 
    const signUpErrorMessage = document.querySelector('#sign-up-error-message'); 

    const showFormSignUp = () => {
        document.querySelector(".login-form").style.display = "none";
        document.querySelector(".sign-up-form").style.display = "flex";
        document.querySelector(".login-text-content h2").innerHTML = 
        "Olá!<br> Seja bem-vindo(a).";
        document.querySelector(".login-text-content p").innerHTML = 
        "Crie sua conta para acessar a plataforma.";
    };

    const showFormLogin = () => {
        document.querySelector(".login-form").style.display = "flex";
        document.querySelector(".sign-up-form").style.display = "none";
        document.querySelector(".login-text-content h2").style.innerHTML = 
        "Olá!<br> Seja bem-vindo(a) de volta.";
        document.querySelector(".login-text-content p").style.innerHTML = 
        "Faça login para continuar acessando essa página.";
    }; 

    signUpLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        showFormSignUp();
    });

    loginLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        showFormLogin();
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
         
    });

    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault(); 
        
    }); 
});