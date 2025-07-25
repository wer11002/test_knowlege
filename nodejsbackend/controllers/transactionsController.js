const db = require("../db");

exports.addTransaction = async (req, res) => {
  const { number, note, date } = req.body;
  if (number == null || date == null) {
    return res.status(400).json({ error: "number and date are required" });
  }

  try {
    const result = await db.query(
      `INSERT INTO transactions (number, note, date) VALUES ($1, $2, $3) RETURNING *`,
      [number, note, date]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};

exports.getAllTransactions = async (req, res) => {
  try {
    const result = await db.query(`SELECT * FROM transactions ORDER BY id ASC`);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};

exports.getBalance = async (req, res) => {
  try {
    const result = await db.query(`SELECT COALESCE(SUM(number),0) AS balance FROM transactions`);
    res.json({ balance: result.rows[0].balance });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};
