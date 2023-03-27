function login() {
    const inputField = document.getElementById("input-field")
    let userNameLength = inputField.value.length;
    const errorMsg = document.getElementById("ErrorMsg")

    errorMsg.textContent = "";

    if(userNameLength < 4) {
        errorMsg.textContent = "ERRO! Nome de usuáro DEVE ser maior que 3 caracteres!"
        return
    }

    let userName = inputField.value;
    const hiddenElements = document.getElementsByClassName("hidden")

    //forEach n funciona? :(
    for(let i = 0; i < hiddenElements.length; i++) {
        hiddenElements[i].style.display = "none";
    }

    const bemVindo = document.getElementById("bem-vindo");

    bemVindo.innerText = "Bem vindo " + userName + "!";
    bemVindo.style.display = "flex";

}