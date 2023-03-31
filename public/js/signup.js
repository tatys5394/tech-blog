console.log("ok");
window.alert("yay");

const login = async (event) => {
    document.location.replace('/api/user/login');
}

const loginButton = document.querySelector('#login-button');
loginButton.addEventListener('click', login);
