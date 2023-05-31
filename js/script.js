// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite (file informazioni team).

let staff = [
    {
        'Nome': 'Wayne Barnett',
        'Role': 'Founder & CEO',
        'Image': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'Nome': 'Angela Caroll',
        'Role': 'Chief Editor',
        'Image': 'angela-caroll-chief-editor.jpg'
    },
    {
        'Nome': 'Walter Gordon',
        'Role': 'Office Manager',
        'Image': 'walter-gordon-office-manager.jpg'
    },
    {
        'Nome': 'Angela Lopez',
        'Role': 'Social Media Manager',
        'Image': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'Nome': 'Scott Estrada',
        'Role': 'Developer',
        'Image': 'scott-estrada-developer.jpg'
    },
    {
        'Nome': 'Barbara Ramos',
        'Role': 'Graphic Designer',
        'Image': 'barbara-ramos-graphic-designer.jpg'
    },

];

console.log(staff)

// MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for(let i=0; i<staff.length; i++){
    console.log(staff[i])
}

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1: Trasformare la stringa foto in una immagine effettiva
// BONUS 2: Organizzare i singoli membri in card/schede (screenshot.png. Ovviamente è un esempio, siete liberi di farle come volete)