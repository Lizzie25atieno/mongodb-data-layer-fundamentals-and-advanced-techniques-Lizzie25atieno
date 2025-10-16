# MongoDB Bookstore Project — Week 1 Assignment

## Overview
This project demonstrates how to use **MongoDB** to manage a simple bookstore database called **plp_bookstore**, focused on **psychology and sociology** books.  
It includes two JavaScript files:
- `insert_books.js` — inserts sample data into the database  
- `queries.js` — performs CRUD operations, advanced queries, aggregations, and indexing  

You will run both scripts using the **MongoDB Shell (mongosh)** and view your data in **MongoDB Compass**.

---

## What You Need
Before you begin, ensure you have the following installed:

1. **MongoDB Community Server** (for local database)
2. **MongoDB Compass** (for GUI visualization)
3. **MongoDB Shell (mongosh)**

If not installed, download them from:  
[https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

---

## Project Structure

Place all the following files in **one folder** (`plp_bookstore`):


---

## Step-by-Step Instructions

### Step 1: Start MongoDB
If you’re running MongoDB locally:
1. Open a new terminal window (PowerShell, Command Prompt, or Terminal)
2. Start the MongoDB service:
```bash
mongod
```

## Step 2: Open MongoDB Shell
In a new terminal window:
```bash 
mongosh  
```   
## Step 3: Run the Insert Script
Inside MongoDB Shell, navigate to the folder containing your files.
Example for windows:
```bash
cd "C:\Users\YourName\Desktop\plp_bookstore"
```
Then run:
```bash
load("insert_books.js")
```
You should see: `10 books were successfully inserted into the database`

## Step 4: Run the Queries Script
After the data is inserted, run:
```bash
load("queries.js")
```

This script will:
- Display books from different genres
- Update and delete specific records
- Show filtered and sorted data
- Perform aggregation queries
- Create indexes and display performance stats
- You’ll see results directly in the shell.

## Step 5: View Data in MongoDB Compass
1. Open MongoDB Compass
2. Connect using the default connection string:
3. Select the database:
plp_bookstore
4. Click on the collection:
books
5. You should now see your sample book documents displayed.
Take a screenshot showing:
- Database name (plp_bookstore)
- Collection name (books)
- A few documents (title, author, genre, price)

## Step 6: Push Everything to GitHub
Make sure the following files are visible in your repository:
- insert_books.js
- queries.js
- Screenshots
- README.md
- MyREADMR.md