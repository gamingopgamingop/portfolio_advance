import Database from 'better-sqlite3';

const db = new Database('portfolio.db');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS newsletter (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

export const insertMessage = db.prepare(`
  INSERT INTO messages (name, email, message)
  VALUES (@name, @email, @message)
`);

export const insertNewsletter = db.prepare(`
  INSERT INTO newsletter (email)
  VALUES (@email)
`);

export const getMessages = db.prepare(`
  SELECT * FROM messages ORDER BY created_at DESC
`);

export const getNewsletterSubscribers = db.prepare(`
  SELECT * FROM newsletter ORDER BY created_at DESC
`);

export default db;