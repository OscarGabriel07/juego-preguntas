loadHomePage();
goToTheGamePage();

function loadHomePage() {
    const container = document.querySelector('.container');

    const welcomeContainer = document.createElement('div');
    welcomeContainer.className = 'welcome';
    const WelcomeTitle = document.createElement('h3');
    WelcomeTitle.textContent = 'Diviértete Respondiendo Preguntas';
    welcomeContainer.appendChild(WelcomeTitle);

    const usernameContainer = document.createElement('div');
    usernameContainer.className = 'username';
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = 'username';
    usernameInput.id = 'username';
    usernameInput.placeholder = 'Ingresa tu nombre de usuario';
    const br = document.createElement('br');
    const buttonGame = document.createElement('button');
    buttonGame.className = 'btn-game';
    buttonGame.textContent = 'Jugar';
    usernameContainer.appendChild(usernameInput);
    usernameContainer.appendChild(br);
    usernameContainer.appendChild(buttonGame);

    const tablePlayers = document.createElement('div');
    tablePlayers.className = "table-players";
    const buttonViewTablePlayers = document.createElement('button');
    buttonViewTablePlayers.className = 'btn-view-table-players';
    buttonViewTablePlayers.textContent = 'Ver Tabla de Jugadores';
    tablePlayers.appendChild(buttonViewTablePlayers);

    container.appendChild(welcomeContainer);
    container.appendChild(usernameContainer);
    container.appendChild(tablePlayers);
}

function goToTheGamePage() {
    const playButton = document.querySelector('.btn-game');
        playButton.addEventListener('click', () => {
        window.location.href = "pages/game.html";
    });
}
