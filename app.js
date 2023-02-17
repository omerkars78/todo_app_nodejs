const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5001;
const todoRouter = require("./src/routers/todoRouters");

app.use(express.json());

app.use("/api",todoRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});