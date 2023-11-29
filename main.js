// Declaring the main Variables
let save = document.getElementsByClassName('save')[0];
let allCards = document.getElementsByClassName('allCards')[0];
let quesInp = document.getElementsByClassName('quesInp')[0];
let answInp = document.getElementsByClassName('answInp')[0];
let newCard = document.getElementsByClassName('newCard')[0];
let delCard = document.getElementsByClassName('delCard')[0];
let createDiv = document.getElementsByClassName('createDiv')[0];
let close = document.getElementsByClassName('close')[0];


// Adding events to the buttons
newCard.addEventListener('click', () => {
    createDiv.style.display = 'block'
})
close.addEventListener('click', () => {
    createDiv.style.display = 'none'
})
delCard.addEventListener('click', () => {
    localStorage.clear()
    renderFlashcards()
})

// Adding event to the main button SAVE
save.addEventListener('click', () => {

    // Getting objects from localStorage
    let jsonData = JSON.parse(localStorage.getItem('jsonData')) || [];

    // Declared an object to push it in the array of localStorage
    let data = {
        "question": quesInp.value,
        "answer": answInp.value
    };

    // Setting the Object inside localStorage
    jsonData.push(data);
    localStorage.setItem('jsonData', JSON.stringify(jsonData));

    // Calling the main function renderFlashcards
    renderFlashcards();

    // Clearing the input boxes
    quesInp.value = ""
    answInp.value = ""
});

// Create an event for the answInp boxes to save it by pressing ENTER 
answInp.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        let jsonData = JSON.parse(localStorage.getItem('jsonData')) || [];

        let data = {
            "question": quesInp.value,
            "answer": answInp.value
        };

        jsonData.push(data);
        localStorage.setItem('jsonData', JSON.stringify(jsonData));

        renderFlashcards();
        quesInp.value = ""
        answInp.value = ""
    }
});

// Create an event for the quesInp boxes to save it by pressing ENTER 
quesInp.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        let jsonData = JSON.parse(localStorage.getItem('jsonData')) || [];

        let data = {
            "question": quesInp.value,
            "answer": answInp.value
        };

        jsonData.push(data);
        localStorage.setItem('jsonData', JSON.stringify(jsonData));

        renderFlashcards();
        quesInp.value = ""
        answInp.value = ""
    }
});

// Declaring the main function renderFlashcards
function renderFlashcards() {
    // giving display none to the createDiv
    createDiv.style.display = 'none'

    allCards.innerHTML = "";

    let jsonData = JSON.parse(localStorage.getItem('jsonData')) || [];

    // Creating a forEach function to loop the object that is coming from the localStorage
    jsonData.forEach((obj) => {
        // Creating the cards here
        let nextDiv = document.createElement('div');
        nextDiv.className = 'nextDiv';
        allCards.appendChild(nextDiv);

        // Creating the text inside the cards
        let question = document.createElement('h2');
        let answer = document.createElement('h2');
        answer.className = 'answer';
        question.className = 'h2';

        // Creating the cross button
        let cross = document.createElement('div');
        cross.innerHTML = 'x';
        cross.className = 'cross';
        nextDiv.appendChild(cross);

        cross.addEventListener('click', () => {
            nextDiv.remove();
            jsonData = jsonData.filter(item => item !== obj);
            localStorage.setItem('jsonData', JSON.stringify(jsonData));
        });

        // Adding the input text inside the in the cards
        question.innerHTML = obj.question;
        answer.innerHTML = obj.answer;

        nextDiv.appendChild(question);
        nextDiv.appendChild(answer);

        // Giving the answer text display function
        nextDiv.addEventListener('click', () => {
            if (answer.style.display !== 'block') {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });
}

// Calling the main function
renderFlashcards()

