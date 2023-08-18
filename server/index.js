const express = require("express");

const app = express();

app.get("/api/signup", (req, res) => {
  res.json({
    data: "you hit signup api",
  });
});

const port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`Port is running at ${port}`);
});
