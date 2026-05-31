import express from "express";
import blogRoutes from "./routes/blog.route";

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());

// Routes
app.use("/", blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});