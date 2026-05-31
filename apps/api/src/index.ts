import express from "express";

const app = express();
const PORT =  process.env.PORT || 8000;

app.get("/main", (req, res) => {
  res.send("Hello World from priyanshu's API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});