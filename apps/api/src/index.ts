import express from "express";
import testRoutes from "./routes/test.route";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

// Routes
app.use("/", testRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});