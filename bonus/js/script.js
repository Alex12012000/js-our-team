// BONUS

// Variabile che racchiude il collògamente al pulsante 'invia' nel DOM
const sendBtn = document.getElementById('addMemberButton');

// Al click dell'utente, la funzione legge i valori all'interno del DOM e crea
// una card con il nome inserito dall'utente, il ruolo e l'immagine
sendBtn.addEventListener('click', sendMember);

function sendMember() {
    // Variabile che legge il nome inserito dall'utente
    const userName = document.getElementById('name').value;
    // Variabile che legge il ruolo inserito dall'utente
    const userRole = document.getElementById('role').value;
    // Array che contiene tutte le immagini disponibili per il nuovo membro del team
    const newImg = ['img/new-team-member-01.jpg', 'img/new-team-member-02.jpg', 'img/new-team-member-03.jpg', 'img/new-team-member-04.jpg']

    // Oggetto con tutte le informazioni fornite dall'utente
    let newMember = {
        name: userName,
        role: userRole,
        img: randomImg(newImg),
        alt: userName
    }

    // Inserisco i dati dei singoli membri all'interno di un template nel dom
    teamContainer.innerHTML += 
    <div class="team-card">
        <div class="card-image">
        <img
            src="${newMember.img}"
            alt="${newMember.alt}"
        />
        </div>
        <div class="card-text">
            <h3>${newMember.name}</h3>
            <p>${newMember.role}</p>
        </div>
    </div>;

}

// Funzione che seleziona in maniera random un elemento all'interno di un array
function randomImg (array) {
    return array[Math.floor(Math.random() * array.length)];
}