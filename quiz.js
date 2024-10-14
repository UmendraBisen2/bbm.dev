const quizData = [
  {
    question: 'I will become a teacher?',
    options: ['simple future', 'Future perfect', 'Future Continuoud', 'Future continuous'],
    answer: 'simple future',
  },
  {
    question: ' He___been working since 8 clock?',
    options: ['being', 'is', 'has', 'hava'],
    answer: 'has',
  },
  {
    question: 'I have been working on the problem?',
    options: ['Future Perfect Continuoue', 'Future perfect', 'Simple future ', 'Argentina'],
    answer: 'France',
  },
  {
    question: 'What is the tallest mountain in the world?',
    options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
    answer: 'Mount Everest',
  },
  {
    question: 'Which is the largest ocean on Earth?',
    options: [
      'Pacific Ocean',
      'Indian Ocean',
      'Atlantic Ocean',
      'Arctic Ocean',
    ],
    answer: 'Pacific Ocean',
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['Au', 'Ag', 'Cu', 'Fe'],
    answer: 'Au',
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: [
      'Pablo Picasso',
      'Vincent van Gogh',
      'Leonardo da Vinci',
      'Michelangelo',
    ],
    answer: 'Leonardo da Vinci',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Mercury', 'Uranus'],
    answer: 'Mars',
  },
  {
    question: 'What is the largest species of shark?',
    options: [
      'Great White Shark',
      'Whale Shark',
      'Tiger Shark',
      'Hammerhead Shark',
    ],
    answer: 'Whale Shark',
  },
  {
    question: 'Which animal is known as the King of the Jungle?',
    options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
    answer: 'Lion',
  },
];

const quizContainer=document.getElementById('quiz');
const resultContainer=document.getElementById('result');
const submitButton=document.getElementById('submit');
const retryButton=document.getElementById('retry');
const showAnswerButton=document.getElementById('showAnswer');

let currentquestion=0;
let score=0;
let incorrectAnswer=[];


function  shuffleArray(array) {
  for(let i=array.length-1; i>0; i--) {
    const j=Math.floor(Math.random()* (i+1));
    [array[i],array[j]]=[array[j], array[i]];

  }
}
function displayQuestion() {
  const displayQuestion=quizData[currentquestion];

  const questionElement = document.currentquestion('div');
  questionElement.className='question';
  questionElement.innerHTML=questionData.question;


}
