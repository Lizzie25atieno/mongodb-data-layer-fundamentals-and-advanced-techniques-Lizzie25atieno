// insert_books.js - Script to populate MongoDB with sample book data

// Import MongoDB client
const { MongoClient } = require('mongodb');

// Connection URI (replace with your MongoDB connection string if using Atlas)
const uri = 'mongodb://localhost:27017';

// Database and collection names
const dbName = 'plp_bookstore';
const collectionName = 'books';

// Sample book data
const books = [
  {
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    genre: "Psychology",
    published_year: 1946,
    price: 10.99,
    in_stock: true,
    pages: 184,
    publisher: "Beacon Press"
  },
  {
    title: "The Interpretation of Dreams",
    author: "Sigmund Freud",
    genre: "Psychology",
    published_year: 1899,
    price: 14.5,
    in_stock: false,
    pages: 630,
    publisher: "Basic Books"
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Cognitive Psychology",
    published_year: 2011,
    price: 18.99,
    in_stock: true,
    pages: 512,
    publisher: "Farrar, Straus and Giroux"
  },
  {
    title: "The Sociological Imagination",
    author: "C. Wright Mills",
    genre: "Sociology",
    published_year: 1959,
    price: 13.75,
    in_stock: true,
    pages: 256,
    publisher: "Oxford University Press"
  },
  {
    title: "Influence: The Psychology of Persuasion",
    author: "Robert B. Cialdini",
    genre: "Social Psychology",
    published_year: 1984,
    price: 15.25,
    in_stock: true,
    pages: 336,
    publisher: "Harper Business"
  },
  {
    title: "The Presentation of Self in Everyday Life",
    author: "Erving Goffman",
    genre: "Sociology",
    published_year: 1956,
    price: 12.5,
    in_stock: false,
    pages: 259,
    publisher: "Anchor Books"
  },
  {
    title: "Quiet: The Power of Introverts in a World That Can't Stop Talking",
    author: "Susan Cain",
    genre: "Personality Psychology",
    published_year: 2012,
    price: 16.99,
    in_stock: true,
    pages: 352,
    publisher: "Crown Publishing"
  },
  {
    title: "Outliers: The Story of Success",
    author: "Malcolm Gladwell",
    genre: "Sociology",
    published_year: 2008,
    price: 14.99,
    in_stock: true,
    pages: 336,
    publisher: "Little, Brown and Company"
  },
  {
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    genre: "Clinical Psychology",
    published_year: 2014,
    price: 17.95,
    in_stock: true,
    pages: 464,
    publisher: "Penguin Books"
  },
  {
    title: "The Lucifer Effect: Understanding How Good People Turn Evil",
    author: "Philip Zimbardo",
    genre: "Social Psychology",
    published_year: 2007,
    price: 15.95,
    in_stock: false,
    pages: 576,
    publisher: "Random House"
  }
];


// Function to insert books into MongoDB
async function insertBooks() {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB server');

    // Get database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Check if collection already has documents
    const count = await collection.countDocuments();
    if (count > 0) {
      console.log(`Collection already contains ${count} documents. Dropping collection...`);
      await collection.drop();
      console.log('Collection dropped successfully');
    }

    // Insert the books
    const result = await collection.insertMany(books);
    console.log(`${result.insertedCount} books were successfully inserted into the database`);

    // Display the inserted books
    console.log('\nInserted books:');
    const insertedBooks = await collection.find({}).toArray();
    insertedBooks.forEach((book, index) => {
      console.log(`${index + 1}. "${book.title}" by ${book.author} (${book.published_year})`);
    });

  } catch (err) {
    console.error('Error occurred:', err);
  } finally {
    // Close the connection
    await client.close();
    console.log('Connection closed');
  }
}

// Run the function
insertBooks().catch(console.error);

/*
 * Example MongoDB queries you can try after running this script:
 *
 * 1. Find all books:
 *    db.books.find()
 *
 * 2. Find books by a specific author:
 *    db.books.find({ author: "George Orwell" })
 *
 * 3. Find books published after 1950:
 *    db.books.find({ published_year: { $gt: 1950 } })
 *
 * 4. Find books in a specific genre:
 *    db.books.find({ genre: "Fiction" })
 *
 * 5. Find in-stock books:
 *    db.books.find({ in_stock: true })
 */ 