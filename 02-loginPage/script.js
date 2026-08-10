const container = document.getElementById('container')
const entrarBtn = document.getElementById('entrar');
const registrarBtn = document.getElementById('criarConta');

entrarBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

registrarBtn.addEventListener('click', () => {
    container.classList.add("active");
});