const db = require("../db");

exports.addTransaction = async (req, res) => {
  const { amount, reason, created_at } = req.body;
  if (amount == null || created_at == null) {
    return res.status(400).json({ error: "amount and created_at are required" });
  }

  try {
    const result = await db.query(
      `INSERT INTO transactions (amount, reason, created_at) VALUES ($1, $2, $3) RETURNING *`,
      [amount, reason, created_at]
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
    const result = await db.query(`SELECT COALESCE(SUM(amount),0) AS balance FROM transactions`);
    res.json({ balance: result.rows[0].balance });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};
