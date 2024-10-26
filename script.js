// Function to generate a random number between 0 and 11
const randomNumber = () => Math.floor(Math.random() * 12);

// Function to return a random month
const randomMonth = () => {
    const monthIndex = randomNumber();
    switch (monthIndex) {
        case 0: return "January";
        case 1: return "February";
        case 2: return "March";
        case 3: return "April";
        case 4: return "May";
        case 5: return "June";
        case 6: return "July";
        case 7: return "August";
        case 8: return "September";
        case 9: return "October";
        case 10: return "November";
        case 11: return "December";
        default: return "Invalid month"; // This will never be hit
    }
};

// Function to return a random statement
const randomStatement = () => {
    const statementIndex = randomNumber();
    switch (statementIndex) {
        case 0: return "To be or not to be?";
        case 1: return "We miss you bud!";
        case 2: return "You won a million dollars.";
        case 3: return "This is your month.";
        case 4: return "Run Forest! Run!";
        case 5: return "Happy Birthday to you!";
        case 6: return "Time rots everything.";
        case 7: return "The future Da Vinci!";
        case 8: return "The name's Bond. James Bond.";
        case 9: return "It's high noon!";
        case 10: return "Live long and prosper.";
        case 11: return "May the Force be with you.";
        default: return "Mmm... Strange this was not supposed to happen.";
    }
};

// Function to return a random sender
const randomFrom = () => {
    const fromIndex = randomNumber();
    switch (fromIndex) {
        case 0: return "The question.";
        case 1: return "From your buddy.";
        case 2: return "By who knows?";
        case 3: return "Sincerely Anonymous.";
        case 4: return "The viewer.";
        case 5: return "From a friend.";
        case 6: return "Philosopher of time.";
        case 7: return "Your greatest fan!";
        case 8: return "By double 008.";
        case 9: return "Declared by Trinity.";
        case 10: return "Whispers of fate.";
        case 11: return "An admirer.";
        default: return "Unknown sender.";
    }
};

// Function to generate a random message
const Message = () => {
    return `
         Date: ${randomMonth()}<br>
         ${randomStatement()}<br>
         ${randomFrom()}
    `;
};

// Function to handle button click
function handleButtonClick() {
    const result = Message();
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = result; // Use innerHTML to allow HTML rendering
}

// Set up event listener for button click
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('myButton').addEventListener('click', handleButtonClick);
});