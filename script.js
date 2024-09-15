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
let score = 0; 


const questions = [
{
    question: 'is Joshua Deluvio a hero? (Yes or No)',
        correctAnswer: 'No'
        
},
    {
        question: 'Duterte is the best president?(True or False)',
        correctAnswer:  'False'
},  
    {
    question: 'kung ang aso ay aso ang pusa ay kanino yan bakit naging isda diba?(True or False)',
    correctAnswer:  'False'
},
    {
        question: 'Is BBM the greatest pres? (Yes or No)',
        correctAnswer: 'No'
    },
{
        question: '3rd number of the pi (input number ex;123)',
        correctAnswer: '4'
    },   {
        question: 'payag kana(Oo or hinde)',
        correctAnswer: 'Oo'
},
    {
        question: 'Will you date Josh? Yes or No',
        correctAnswer: 'Yes'
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
        // score
        alert(`Your score is ${score} out of ${questions.length}.`);
        if (score === questions.length) {
            // Perpek score 
            window.location.href = 'congratulations.html';
        } else {
            // hindi perpek
            window.location.href = 'try-again.html';
    }
    }
}

// Function para magstart
function quizButton() {
    currentQuestionIndex = 0; 
    score = 0; 
    showQuestion();
}

document.addEventListener('DOMContentLoaded', (event) => {
    if (window.location.pathname.endsWith('try-again.html')) {
        const retryButton = document.getElementById('retry-button');
        
        retryButton.addEventListener('click', () => {
            // Button to redirect to index page palag palag na to
            window.location.href = 'index.html';
        });
    }
});
