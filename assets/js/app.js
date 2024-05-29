let dialogeTitle;
let notificacion1;
let notificacion2;
let abrir1;
let abrir2;
let decline1;
let decline2;
const exceptions = ["m3B1", "m3B2","m3B3","m3A1", "m3A2","m3A4", "m3A5",]
const userName = localStorage.getItem("user")
const nameUser = localStorage.getItem("name")
const segundos = textLength()
const pageNow = url()

function typeWriter(id) {
    const text = document.querySelector("#" + id).innerHTML;
    const output = document.querySelector("#" + id);
    let index = 0;

    output.textContent = '';

    function writeCharacter() {
        if (index < text.length) {
            output.textContent += text.charAt(index);
            index++;
            setTimeout(writeCharacter, 50);
        }
    }

    writeCharacter();
}

function url() {
    const url = window.location.href ;
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const segments = pathname.split('/');
    const fileName = segments.pop();
    const baseName = fileName.split('.')[0];
    return baseName
}

function textLength() {
    const frase = document.querySelector("#dialoge_text").innerHTML;
    const numeroDeLetras = frase.length;
    console.log(numeroDeLetras)

    const cantidadDeSegundos = (numeroDeLetras*60) + 200;
    return cantidadDeSegundos
}

if (!exceptions.includes(pageNow)) {
    localStorage.setItem("parte", url());
}

// section: dialoge
if (document.querySelector("#dialoge")) {
    dialogeTitle = document.querySelector("#dialoge");
    dialogeTitle.innerHTML = nameUser;

    typeWriter("dialoge_text")
}

switch (url()) {
    case 'c2A':
        setTimeout(() => {
            window.location.href = "./m3A.html"
        }, segundos);
        break;
    case 'c2B':
        setTimeout(() => {
            window.location.href = "./m3B.html"
        }, segundos);
        break;
    default:
        break;
}

// section: notificacion
setTimeout(() => {
    if (document.querySelector("#notification1") && document.querySelector("#notification2")) {
    notificacion1 = document.querySelector("#notification1");
    notificacion2 = document.querySelector("#notification2");
    setTimeout(() => {
        notificacion2.classList.toggle("d-none")
    }, 1000);
    setTimeout(() => {
        notificacion1.classList.toggle("d-none")
    }, 2000);
}
}, 4000);


if (document.querySelector("#accept1") && document.querySelector("#decline1")) {
    abrir1 = document.querySelector("#accept1");
    abrir2 = document.querySelector("#accept2");
    cerrar1 = document.querySelector("#decline1");
    cerrar2 = document.querySelector("#decline2");

    abrir1.addEventListener("click", () => {
        const fileUrl = '../archives/Caso.png';
        const fileName = 'Caso.png';
        const a = document.createElement('a');
        a.href = fileUrl;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => {
            notificacion2.classList.toggle("slide-in-fwd-right")
            notificacion2.classList.toggle("slide-out-right")
            setTimeout(() => {
                notificacion2.classList.toggle("d-none")
            }, 100);
        }, 100);
        setTimeout(() => {
            notificacion1.classList.toggle("slide-in-fwd-right")
            notificacion1.classList.toggle("slide-out-right")
        }, 500);
        setTimeout(() => {
            window.location.href = "./c2A.html"
        }, 600);
    })
    abrir2.addEventListener("click", () => {
        const fileUrl = '../archives/ayuda.png';
        const fileName = 'ayuda.png';
        const a = document.createElement('a');
        a.href = fileUrl;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => {
            notificacion1.classList.toggle("slide-in-fwd-right")
            notificacion1.classList.toggle("slide-out-right")
            setTimeout(() => {
                notificacion1.classList.toggle("d-none")
            }, 100);
        }, 100);
        setTimeout(() => {
            notificacion2.classList.toggle("slide-in-fwd-right")
            notificacion2.classList.toggle("slide-out-right")
        }, 500);
        setTimeout(() => {
            window.location.href = "./c2B.html"
        }, 600);
    })
    cerrar1.addEventListener("click", () => {
        notificacion1.classList.toggle("slide-in-fwd-right")
        notificacion1.classList.toggle("slide-out-right")
        setTimeout(() => {
            notificacion1.classList.toggle("d-none")
        }, 200);
        if (notificacion2.classList.contains("d-none")) {
            localStorage.clear()
            setTimeout(() => {
                window.location.href = "../../index.html"
            }, 300);
        }
    })
    cerrar2.addEventListener("click", () => {
        notificacion2.classList.toggle("slide-in-fwd-right")
        notificacion2.classList.toggle("slide-out-right")
        setTimeout(() => {
            notificacion2.classList.toggle("d-none")
        }, 200);
        if (notificacion1.classList.contains("d-none")) {
            localStorage.clear()
            setTimeout(() => {
                window.location.href = "../../index.html"
            }, 300);
        }
    })
}



