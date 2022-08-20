const tasks = require("./routes/tasks");
const connectDB = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();
require("dotenv").config();

connectDB(process.env.MONGO_URI);

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);

const port = process.env.PORT || "8080";
app.listen(port, () => console.log(`Listening on port ${port}`));
