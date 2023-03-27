function login() {
    const userName = document.getElementById("input-field")
    let userNameLength = userName.value.length;
    const errorMsg = document.getElementById("ErrorMsg")

    if(userNameLength < 4) {
        errorMsg.textContent = "ERRO! Nome de usuáro DEVE ser maior que 3 caracteres!"
    } else {
        errorMsg.textContent = "";
    }

    console.log(errorMsg)
}