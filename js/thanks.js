loadThankYouPage();
goToTheHomePage();

console.log("entrando thankyou page");
console.log("Hola");

function loadThankYouPage() {
    const container = document.querySelector('.container');
    
    const thankYouContainer = document.createElement('div');
    thankYouContainer.className = 'thank-you';
    const titleThankYou = document.createElement('h2');
    titleThankYou.textContent = '¡Gracias por Participar!';
    thankYouContainer.appendChild(titleThankYou);

    const score = document.createElement('div');
    score.className = 'score';
    const titleScore = document.createElement('span');
    titleScore.textContent = 'Puntos Ganados:';
    const inputScore = document.createElement('input');
    inputScore.type = 'text';
    inputScore.id = 'score';
    inputScore.name = 'score';
    inputScore.value = '1450';
    inputScore.disabled = true;
    const br = document.createElement('br');
    const buttonReturnIndex = document.createElement('button');
    buttonReturnIndex.className = 'btn-score';
    buttonReturnIndex.textContent = 'Volver al Inicio';
    score.appendChild(titleScore);
    score.appendChild(inputScore);
    score.appendChild(br);
    score.appendChild(buttonReturnIndex);

    container.appendChild(thankYouContainer);
    container.appendChild(score);
}

function goToTheHomePage() {
    const homeButton = document.querySelector('.btn-score');
        homeButton.addEventListener('click', () => {
        window.location.href = "/index.html";
    });
}
