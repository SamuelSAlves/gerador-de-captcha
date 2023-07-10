//selecionando os elementos DOM
const captchaTextBox = document.querySelector(".captch_box input");
const refreshButton = document.querySelector(".refresh_button");
const captchaInputBox = document.querySelector(".captch_input input");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".button");

//variavel para armazenar o gerador captcha
let = captchaText = null;

// função para gerar o captcha
const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 7);
    const randomStringArray = randomString.split("");
    const changeString = randomStringArray.map((char) => (Math.random()
    > 0.5 ? char.toUpperCase(): char));
    captchaText = changeString.join("  ");
    captchaTextBox.value = captchaText;
};

const refreshBtnClick = () => {
    generateCaptcha();
    captchaInputBox.value = "";
    captchaKeyUpValidate();
}

const captchaKeyUpValidate = () => {
    //alterna o botão enviar e desativar a classe baseado no campo de entrada captcha.
    submitButton.classList.toggle("disabled", !captchaInputBox.value);

    if (!captchaInputBox.value) message.classList.remove("active");
};

//função para validar o captcha inserido
const submitBtnClick = () => {
    captchaText = captchaText
        .split("")
        .filter((char) => char !== " ")
        .join("");
    message.classList.add("active");
    //verifica se o texto captcha requerido está correto ou não
    if (captchaInputBox.value === captchaText) {
        message.innerText = "Entered captcha is correct";
        message.style.color = "#826afb";    
    } else {
        message.innerText = "Entered captcha is not correct";
        message.style.color = "#FF2525";
    }
};

// adciona event listeners para o botão de atualização, captchaInputBox, submit buttom
refreshButton.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);
submitButton.addEventListener("click", submitBtnClick);

//gera o captcha quando a página carrega
generateCaptcha();