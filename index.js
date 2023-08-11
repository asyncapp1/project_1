import express, { json } from "express";

const app = express();
app.use(json());
const port = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(500).json({ message: "This is my first endpoint" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
