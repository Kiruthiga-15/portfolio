import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sqlite3 from "sqlite3";

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

const sqlite3Verbose = sqlite3.verbose();
const db = new sqlite3Verbose.Database("./contacts.db");

db.run(`CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email and message are required." });
  }

  const stmt = db.prepare(
    `INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)`
  );
  stmt.run(name, email, phone || "", message, function (err) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to save data." });
    }
    res.json({ success: true, id: this.lastID });
  });
  stmt.finalize();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
