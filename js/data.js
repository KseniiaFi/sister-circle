// Mock data for SisterCircle

// Array of help requests
const helpRequests = [
  {
    id: 1,
    title: 'Help me write a resume',
    description: 'Changing careers, not sure how to describe my experience',
    category: 'career',
    author: 'Maria',
    city: 'Helsinki',
    points: 10,
    isOpen: true,
  },
  {
    id: 2,
    title: 'Looking for a Finnish pie recipe',
    description: 'Want to surprise my family this weekend',
    category: 'cooking',
    author: 'Olga',
    city: 'Tampere',
    points: 5,
    isOpen: true,
  },
  {
    id: 3,
    title: 'Need help with a legal document',
    description: 'Looking for someone to review a rental agreement',
    category: 'legal',
    author: 'Elena',
    city: 'Espoo',
    points: 15,
    isOpen: false,
  },
  {
    id: 4,
    title: 'Read a bedtime story in English',
    description: 'My daughter loves stories, would be great online via call',
    category: 'languages',
    author: 'Irina',
    city: 'Vantaa',
    points: 8,
    isOpen: true,
  },
];

// Filter only open requests
const openRequests = helpRequests.filter((request) => request.isOpen === true);
console.log('Open requests:', openRequests.length); // 3

// Get all titles
const titles = helpRequests.map((request) => request.title);
console.log('All titles:', titles);

// Find request by id
const findRequest = (id) => helpRequests.find((request) => request.id === id);
console.log('Request #3:', findRequest(3));

// Calculate total points available
const totalPoints = helpRequests.reduce((sum, request) => sum + request.points, 0);
console.log('Total points available:', totalPoints); // 38

// --- Operators practice ---

// Find only open requests with points more than 7
const valuableOpenRequests = helpRequests.filter(
  (request) => request.isOpen === true && request.points > 7,
);
console.log('Valuable open requests:', valuableOpenRequests.length); // 2

// --- Closure practice ---

// User points counter using closure
const createUserCounter = (userName, startPoints) => {
  let points = startPoints;

  const earnPoints = (amount) => {
    points = points + amount;
    console.log(`${userName} now has ${points} points 🌸`);
  };

  return earnPoints;
};

const anna = createUserCounter('Anna', 0);
const maria = createUserCounter('Maria', 10);

anna(5); // Anna now has 5 points 🌸
anna(8); // Anna now has 13 points 🌸
maria(3); // Maria now has 13 points 🌸
anna(2); // Anna now has 15 points 🌸  ← Анна помнит свои очки!
