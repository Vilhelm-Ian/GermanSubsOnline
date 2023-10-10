const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "/index.html"));
});

app.use(express.static("public"));

app.listen(process.env.PORT || 3000, () => {
   console.log("server started on port 3000");
});
