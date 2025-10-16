// queries.js

use("plp_bookstore");

// BASIC CRUD OPERATIONS //


// Find all books in a specific genre
db.books.find({ genre: "Psychology" });

// Find books published after 2010
db.books.find({ published_year: { $gt: 2010 } });

// Find books by a specific author
db.books.find({ author: "Malcolm Gladwell" });

// Update the price of a specific book
db.books.updateOne(
  { title: "Outliers: The Story of Success" },
  { $set: { price: 13.99 } }
);

// Delete a book by its title
db.books.deleteOne({ title: "The Interpretation of Dreams" });


// 🔍 ADVANCED QUERY OPERATIONS //

// Books that are in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// Projection: only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// Sort by price ascending
db.books.find().sort({ price: 1 });

// Sort by price descending
db.books.find().sort({ price: -1 });

// Pagination (page 1 - 5 books)
db.books.find().limit(5);

// Pagination (page 2 - next 5 books)
db.books.find().skip(5).limit(5);


// AGGREGATION PIPELINES //

// Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } },
  { $sort: { avgPrice: -1 } }
]);

// Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
]);

// Group books by publication decade
db.books.aggregate([
  {
    $addFields: {
      decade: {
        $concat: [
          { $toString: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] } },
          "s"
        ]
      }
    }
  },
  { $group: { _id: "$decade", count: { $sum: 1 } } },
  { $sort: { _id: 1 } }
]);


// INDEXING //

// Create an index on the title field
db.books.createIndex({ title: 1 });

// Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 });

// Check performance improvement using explain()
db.books.find({ title: "Outliers: The Story of Success" }).explain("executionStats");
