
// Array con tutti i dati dei membri del team
const teamCards = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'img/wayne-barnett-founder-ceo.jpg',
        alt: 'Wayne Barnett'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'img/angela-caroll-chief-editor.jpg',
        alt: 'Angela Caroll'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'img/walter-gordon-office-manager.jpg',
        alt: 'Walter Gordon'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'img/angela-lopez-social-media-manager.jpg',
        alt: 'Angela Lopez'
    },
    
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'img/scott-estrada-developer.jpg',
        alt: 'Scott Estrada'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'img/barbara-ramos-graphic-designer.jpg',
        alt: 'Barbara Ramos'
    }

];

// Variabile che contiene il team-container del dom
const teamContainer = document.querySelector('.team-container');

// per ogni membro ottengo le singole informazioni
for ( let i = 0; i < teamCards.length; i++) {
    let singleMember = teamCards[i];
    
    // Inserisco i dati dei singoli membri all'interno di un template nel dom
    teamContainer.innerHTML += `
    <div class="team-card">
        <div class="card-image">
        <img
            src="${singleMember.img}"
            alt="${singleMember.alt}"
        />
        </div>
        <div class="card-text">
            <h3>${singleMember.name}</h3>
            <p>${singleMember.role}</p>
        </div>
    </div>`;
  
}