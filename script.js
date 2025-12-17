function sendMail(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/manrzbzz", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}

function toggleRespMenu() {
    document.getElementById("resp_menu").classList.toggle('resp_menu_closed')
}

function myFunction(x) {
    x.classList.toggle("change");
}