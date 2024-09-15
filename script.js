// let currentQuestionIndex = 0; 
// let score = 0; // Tracks the number of correct answers

// // Array of quiz questions and their correct answers
// const questions = [
//     {
//         question: 'What is 2 + 2?',
//         correctAnswer: '4'
//     },
//     {
//         question: 'Duterte is the best president(true or false)',
//         correctAnswer: 'false'
//     },
//     {
//         question: 'Is BBM the greatest pres?',
//         correctAnswer: 'no'
//     },
//     {
//         question: '3rd number of the pi',
//         correctAnswer: '4'
//     },
//     {
//         question: 'Will you date Josh? yes or no',
//         correctAnswer: 'yes'
//     }
// ];


// function showQuestion() {
//     if (currentQuestionIndex < questions.length) {
//         const currentQuestion = questions[currentQuestionIndex]; 
//         const userAnswer = prompt(currentQuestion.question);
        
    
//         if (userAnswer.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
//             score++;
//             alert('Correct!'); 
//         } else {
//             alert('Wrong answer.'); 
//         }

//         currentQuestionIndex++;
//         showQuestion(); 
//     } else {
//         // score
//         if (score === questions.length) {
//             //mapupunta sa kwan kapag perfect sa page nato
//             window.location.href = 'congratulations.html';
//         } else {
//             // kapag may mali pupunta dito bro tas pwede ulit ulitin
//             window.location.href = 'try-again.html';
//         }
//     }
// }

// // para sa index
// function quizButton() {
//     currentQuestionIndex = 0; 
//     score = 4; 
//     showQuestion();
// }
// document.addEventListener('DOMContentLoaded', (event) => {
    
//     if (window.location.pathname.endsWith('try-again.html')) {
//         const retryButton = document.getElementById('retry-button');
        
//         retryButton.addEventListener('click', () => {
//             // butoon para sa redirect po
//             window.location.href = 'index.html';
//         });
//     }
// });



let currentQuestionIndex = 0; 
let score = 0; // Tracks the number of correct answers

// Array of quiz questions and their correct answers
const questions = [
    {
        question: 'What is 2 + 2?',
        correctAnswer: '4'
    },
    {
        question: 'Duterte is the best president(true or false)',
        correctAnswer: 'false'
    },
    {
        question: 'Is BBM the greatest pres?',
        correctAnswer: 'no'
    },
    {
        question: '3rd number of the pi',
        correctAnswer: '4'
    },
    {
        question: 'Will you date Josh? yes or no',
        correctAnswer: 'yes'
    }
];

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex]; 
        const userAnswer = prompt(currentQuestion.question);

        if (userAnswer.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
            score++;
            alert('Correct!'); 
        } else {
            alert('Wrong answer.'); 
        }

        currentQuestionIndex++;
        showQuestion(); 
    } else {
        // Show the score and redirect
        alert(`Your score is ${score} out of ${questions.length}.`);
        if (score === questions.length) {
            // Perfect score redirect
            window.location.href = 'congratulations.html';
        } else {
            // Not perfect score redirect
            window.location.href = 'try-again.html';
        }
    }
}

// Function to start the quiz
function quizButton() {
    currentQuestionIndex = 0; 
    score = 0; // Reset score for a new quiz
    showQuestion();
}

document.addEventListener('DOMContentLoaded', (event) => {
    if (window.location.pathname.endsWith('try-again.html')) {
        const retryButton = document.getElementById('retry-button');
        
        retryButton.addEventListener('click', () => {
            // Button to redirect to index page
            window.location.href = 'index.html';
        });
    }
});
