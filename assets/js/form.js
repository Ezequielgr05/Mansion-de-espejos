const formOld = document.querySelector("#form_old");
const formNew = document.querySelector("#form_new");
const buttonEntrar = document.querySelector("#entrar");
const buttonSubmit = document.querySelector('#form_submit');
const cache = localStorage.getItem("first");
const parte = localStorage.getItem("parte");

if (cache == null) {
    console.log("no hubo una primera vez")
    if (cache !== 'true') {
        console.log("ya si")
        formOld.classList.toggle('d-none');
        buttonSubmit.addEventListener('click', function(event) {
            event.preventDefault();
            var name = document.querySelector('#name').value;
            var user = document.querySelector('#user').value;
            localStorage.setItem("name", name);
            localStorage.setItem("user", user);
            localStorage.setItem("first", 'true');
            localStorage.setItem("parte", "c1");
            setTimeout(() => {
                window.location.href = "./assets/html/c1.html";
            }, 500);
        });
    }
} else if (cache == 'true') {
    formNew.classList.toggle('d-none');
    buttonEntrar.addEventListener("click", (event) => {
        event.preventDefault();
        if (parte !== null) {
            window.location.href = "./assets/html/" + parte +".html";
        }
    })
}


