const sqlite3 = require('sqlite3').verbose();

// Open or create the SQLite database
const db = new sqlite3.Database('./books.db', (err) => {
  if (err) {
    console.error('Error connecting to SQLite database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// Create a table if it doesn't exist
db.run(
  `CREATE TABLE IF NOT EXISTS Books (
    BookID INTEGER PRIMARY KEY AUTOINCREMENT,
    Title TEXT NOT NULL,
    AuthorName TEXT NOT NULL,
    GenreName TEXT NOT NULL,
    Pages INTEGER,
    PublishedDate TEXT
  )`,
  (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
    }
  }
);

// Export functions to interact with the database

const addBook = (title, authorName, genreName, pages, publishedDate) => {
  const sql = `INSERT INTO Books (Title, AuthorName, GenreName, Pages, PublishedDate)
               VALUES (?, ?, ?, ?, ?)`;

  return new Promise((resolve, reject) => {
    db.run(sql, [title, authorName, genreName, pages, publishedDate], function (err) {
      if (err) {
        reject(err.message);
      } else {
        resolve({ BookID: this.lastID });
      }
    });
  });
};

const getAllBooks = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM Books', [], (err, rows) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(rows);
      }
    });
  });
};
const searchBooksByTitle = (title) => {
  let query = 'SELECT * FROM Books WHERE 1=1';  // Start with a base query
  const params = [];  // Array to hold the query parameters

  // Add filter condition for title if provided
  if (title) {
    query += ' AND Title LIKE ?';  // Use LIKE for partial matching in title
    params.push(`%${title}%`);  // Add title parameter with wildcards for partial matching
  }

  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(rows);  // Return the search results
      }
    });
  });
};

const getBookById = (bookID) => {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM Books WHERE BookID = ?', [bookID], (err, row) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(row);
      }
    });
  });
};

const updateBook = (bookID, formData) => {
  const { title, author, genre, publishedDate, pages } = formData;

  // Update query to modify all fields except the BookID
  const sql = `
    UPDATE Books 
    SET Title = ?, AuthorName = ?, GenreName = ?, PublishedDate = ?, Pages = ? 
    WHERE BookID = ?`;

  return new Promise((resolve, reject) => {
    db.run(sql, [title, author, genre, publishedDate, pages, bookID], function (err) {
      if (err) {
        reject(err.message);
      } else {
        resolve({ changes: this.changes }); // Return the number of rows changed
      }
    });
  });
};


const deleteBook = (bookID) => {
  const sql = `DELETE FROM Books WHERE BookID = ?`;

  return new Promise((resolve, reject) => {
    db.run(sql, [bookID], function (err) {
      if (err) {
        reject(err.message);
      } else {
        resolve({ changes: this.changes });
      }
    });
  });
};

// Export the functions
module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  searchBooksByTitle
};
