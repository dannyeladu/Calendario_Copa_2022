function createMenu(link, fase, nome) {
    return `
        <li>
            <a href="./${link}.html" class="${fase}">
                <svg class="button-left" fill="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 46" preserveAspectRatio="none">
                    <path d="M0 23C5.78 15.215 15.805 5.897 23 0v46C15.805 40.103 5.78 30.785 0 23Z"></path>
                </svg>
                <span class="btn btn-primary">${nome}</span>
                <svg class="button-right" fill="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 46" preserveAspectRatio="none">
                    <path d="M23 23C16.749 30.785 7.43 40.103 0 46V0c7.43 5.897 16.749 15.215 23 23Z"></path>
                </svg>
            </a>
        </li>

    `
}

document.querySelector("#menu").innerHTML = `
    <ul>
        ${createMenu("index", "fase-grupo", "Fase de Grupos")}
        ${createMenu("oitavas", "fase-oitavas", "Oitavas de Final")}
        ${createMenu("quartas", "fase-quartas", "Quartas de Final")}
        ${createMenu("semifinal", "fase-semifinal", "Semifinal")}
        ${createMenu("terceiro-lugar", "fase-terceiro", "3º lugar")}
        ${createMenu("final", "fase-final", "Final")}
    </ul>
`

function createGame(player1, stadium, hour, player2) {
    return `
        <li>
            <figure>    
                <img src="./assets/flags/icon-${player1}.svg" alt="Bandeira do ${player1}">
                <figcaption>${player1}</figcaption>
            </figure>
            <div class="info">
                <span>${stadium}<br></span>
                <strong>${hour}</strong>
            </div>
            <figure> 
                <img src="./assets/flags/icon-${player2}.svg" alt="Bandeira da ${player2}">
                <figcaption>${player2}</figcaption>
            </figure>
        </li>    
    `
}

let delay = -0.4;
function createCard(fase, date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card ${fase}" style="animation-delay: ${delay}s">
        <h2>${date}<span>${day}</span></h2>
        <ul>
            ${games}
        </ul>

    </div>
    `
}

document.querySelector("#cards").innerHTML = `
    <div class="games">
        ${createCard("oitavas", 
            "03/12",
            "sábado",
            createGame("netherlands", "INTERNACIONAL KHALIFA", "12:00", "united states") +
            createGame("argentina", "AHMAD BIN ALI", "16:00", "australia")
        )}
        ${createCard("oitavas", 
            "04/12",
            "domingo",
            createGame("france", "AL THUMAMA", "12:00", "poland") +
            createGame("england", "AL BAYT", "16:00", "senegal")
        )}
        ${createCard("oitavas", 
            "05/12",
            "segunda",
            createGame("japan", "AL JANOUB", "12:00", "croatia") +
            createGame("brazil", "ESTÁDIO 974", "16:00", "south korea")
        )}
        ${createCard("oitavas", 
            "06/12",
            "terça",
            createGame("morocco", "CIDADE DA EDUCAÇÃO", "12:00", "spain") +
            createGame("portugal", "LUSAIL", "16:00", "switzerland")
        )}          
    </div>
`