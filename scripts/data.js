const data = [
  {
    question: 'Which planet is known as the "Red Planet"?',
    options: ["Mercury", "Mars", "Venus", "Jupiter"],
    answer: "Mars",
  },
  {
    question: 'Who painted the famous artwork "Mona Lisa"?',
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
    answer: "Canberra",
  },
  {
    question: 'Which country is known as the "Land of the Rising Sun"?',
    options: ["China", "South Korea", "Japan", "Vietnam"],
    answer: "Japan",
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "Which country is famous for the ancient pyramids?",
    options: ["Greece", "Egypt", "Mexico", "Italy"],
    answer: "Egypt",
  },
  {
    question: "Which animal is known for its black and white stripes?",
    options: ["Giraffe", "Panda", "Zebra", "Cheetah"],
    answer: "Zebra",
  },
  {
    question:
      "Who is credited with discovering gravity after seeing an apple fall from a tree?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Thomas Edison",
    ],
    answer: "Isaac Newton",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "Which famous scientist developed the theory of relativity?",
    options: ["Isaac Newton", "Marie Curie", "Albert Einstein", "Nikola Tesla"],
    answer: "Albert Einstein",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mercury", "Mars", "Jupiter", "Venus"],
    answer: "Jupiter",
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Nile", "Amazon", "Mississippi", "Yangtze"],
    answer: "Nile",
  },
  {
    question: "Which planet has the most moons in our solar system?",
    options: ["Earth", "Saturn", "Mars", "Jupiter"],
    answer: "Jupiter",
  },
  {
    question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
    options: ["Venus", "Mars", "Mercury", "Saturn"],
    answer: "Venus",
  },
  {
    question: "Which planet is famous for its beautiful ring system?",
    options: ["Neptune", "Mars", "Saturn", "Uranus"],
    answer: "Saturn",
  },
  {
    question: "Which planet is often called the 'Blue Planet'?",
    options: ["Mars", "Neptune", "Saturn", "Earth"],
    answer: "Earth",
  },
  {
    question:
      "Which planet is known for its giant storm called the 'Great Red Spot'?",
    options: ["Mars", "Jupiter", "Neptune", "Uranus"],
    answer: "Jupiter",
  },
  {
    question: "Which planet is the third closest to the Sun?",
    options: ["Venus", "Earth", "Neptune", "Mercury"],
    answer: "Earth",
  },
  {
    question:
      "Which planet is often referred to as the 'Sister Planet' of Earth?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Venus",
  },
  {
    question:
      "Which planet is famous for its prominent and colorful cloud bands?",
    options: ["Jupiter", "Mars", "Saturn", "Uranus"],
    answer: "Jupiter",
  },
  {
    question: "Which planet has the highest average surface temperature?",
    options: ["Mercury", "Mars", "Venus", "Jupiter"],
    answer: "Venus",
  },
  {
    question:
      "Which planet is known for its icy and geologically active moon called Enceladus?",
    options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
    answer: "Saturn",
  },
  {
    question: "Which planet is nicknamed the 'Giant of the Solar System'?",
    options: ["Neptune", "Mars", "Jupiter", "Uranus"],
    answer: "Jupiter",
  },
  {
    question:
      "Which planet is famous for its prominent and distinctive ring system?",
    options: ["Mars", "Saturn", "Jupiter", "Uranus"],
    answer: "Saturn",
  },
  {
    question: "What is the capital city of France?",
    options: ["Paris", "London", "Rome", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Cu"],
    answer: "Au",
  },
  {
    question: "What is the highest mountain in the world?",
    options: ["K2", "Mount Everest", "Kilimanjaro", "Matterhorn"],
    answer: "Mount Everest",
  },
  {
    question:
      "What is the symbol for the element carbon on the periodic table?",
    options: ["Ca", "Co", "C", "Cu"],
    answer: "C",
  },
  {
    question: "Who is the author of the 'Harry Potter' book series?",
    options: [
      "J.R.R. Tolkien",
      "J.K. Rowling",
      "George R.R. Martin",
      "Stephen King",
    ],
    answer: "J.K. Rowling",
  },
  {
    question: "Who painted the famous artwork 'The Starry Night'?",
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    answer: "Vincent van Gogh",
  },
  {
    question: "Who wrote the famous novel 'To Kill a Mockingbird'?",
    options: [
      "J.D. Salinger",
      "Harper Lee",
      "F. Scott Fitzgerald",
      "Mark Twain",
    ],
    answer: "Harper Lee",
  },
  {
    question: "What is the capital city of Brazil?",
    options: ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Salvador"],
    answer: "Brasilia",
  },
  {
    question: "Which country is famous for its tulip fields?",
    options: ["Netherlands", "Italy", "France", "Germany"],
    answer: "Netherlands",
  },
  {
    question: "Who is the author of the book 'Pride and Prejudice'?",
    options: [
      "Jane Austen",
      "Emily Bronte",
      "Virginia Woolf",
      "Charlotte Bronte",
    ],
    answer: "Jane Austen",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mercury", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital city of Japan?",
    options: ["Kyoto", "Tokyo", "Osaka", "Hiroshima"],
    answer: "Tokyo",
  },
  {
    question: "Who wrote the novel '1984'?",
    options: [
      "George Orwell",
      "Aldous Huxley",
      "Ray Bradbury",
      "J.R.R. Tolkien",
    ],
    answer: "George Orwell",
  },
  {
    question: "What is the chemical symbol for sodium?",
    options: ["Na", "K", "Ca", "Mg"],
    answer: "Na",
  },
  {
    question: "Which mammal lays eggs?",
    options: ["Dolphin", "Kangaroo", "Platypus", "Elephant"],
    answer: "Platypus",
  },
  {
    question: "Who painted the famous artwork 'The Last Supper'?",
    options: [
      "Michelangelo",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Vincent van Gogh",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    question: "Which country is known as the 'Land Down Under'?",
    options: ["Australia", "Canada", "New Zealand", "Brazil"],
    answer: "Australia",
  },
  {
    question: "What is the chemical symbol for helium?",
    options: ["H", "He", "Li", "Be"],
    answer: "He",
  },
  {
    question: "Who is the author of the 'Lord of the Rings' book series?",
    options: [
      "J.R.R. Tolkien",
      "C.S. Lewis",
      "George R.R. Martin",
      "J.K. Rowling",
    ],
    answer: "J.R.R. Tolkien",
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Heart", "Lungs", "Skin"],
    answer: "Skin",
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Mars", "Venus", "Jupiter"],
    answer: "Mercury",
  },
  {
    question: "Who painted the famous artwork 'The Scream'?",
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Edvard Munch",
      "Salvador Dalí",
    ],
    answer: "Edvard Munch",
  },
  {
    question: "What is the capital city of Canada?",
    options: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
  {
    question: "What is the chemical symbol for potassium?",
    options: ["K", "P", "Ko", "Ka"],
    answer: "K",
  },
  {
    question: "Who wrote the play 'Hamlet'?",
    options: [
      "William Shakespeare",
      "George Bernard Shaw",
      "Oscar Wilde",
      "Jane Austen",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Maldives", "Vatican City", "Nauru"],
    answer: "Vatican City",
  },
];

data.sort(() => 0.5 - Math.random());

export default data;
