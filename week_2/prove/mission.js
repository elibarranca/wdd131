
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        logo.src = "https://elibarranca.github.io/wdd131/week_2/prove/images/BYUI_logo_black.png";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        logo.src = "https://elibarranca.github.io/wdd131/week_2/prove/images/BYUI_logo.jpg";
    }
}           
                    