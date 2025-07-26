const express = require("express");
const cors = require("cors");  // <-- import cors
const app = express();
const transactionsRoutes = require("./routes/transactions");

app.use(cors());             // <-- add this BEFORE your routes
app.use(express.json());

app.use("/transactions", transactionsRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
