// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite (file informazioni team).

const staff = [
    {
        'name': 'Wayne Barnett',
        'role': 'Founder & CEO',
        'image': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'name': 'Angela Caroll',
        'role': 'Chief Editor',
        'image': 'angela-caroll-chief-editor.jpg'
    },
    {
        'name': 'Walter Gordon',
        'role': 'Office Manager',
        'image': 'walter-gordon-office-manager.jpg'
    },
    {
        'name': 'Angela Lopez',
        'role': 'Social Media Manager',
        'image': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'name': 'Scott Estrada',
        'role': 'Developer',
        'image': 'scott-estrada-developer.jpg'
    },
    {
        'name': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'image': 'barbara-ramos-graphic-designer.jpg'
    },

];

console.log(staff);

// MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// for(let i=0; i<staff.length; i++){
//     console.log(staff[i]);
// }

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

let stamp = document.getElementById('output');

for(let i=0; i<staff.length; i++){

    let member = staff[i];

    console.log(member);

    let column = `<div>
        <img src="${image.member}">
        <p>${member.name}</p>
        <p>${member.role}</p></div>`;

    // column.innerHTML += stamp; (E' SBAGLIATO!!!!!)

    stamp.innerHTML += column;
}



// BONUS 1: Trasformare la stringa foto in una immagine effettiva


// BONUS 2: Organizzare i singoli membri in card/schede (screenshot.png. Ovviamente è un esempio, siete liberi di farle come volete)