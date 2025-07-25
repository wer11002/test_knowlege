const express = require("express");
const app = express();
const transactionsRoutes = require("./routes/transactions");

app.use(express.json());

app.use("/transactions", transactionsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
