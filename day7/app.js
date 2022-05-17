const menu_login = document.querySelector("#login-link");

function loginalert () {
    if(menu_login.style.color === "red") {
    menu_login.style.color = "white";
    } else {
        menu_login.style.color = "red";
    }


}

menu_login.addEventListener("click", loginalert);