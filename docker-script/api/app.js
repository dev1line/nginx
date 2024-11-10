const express = require("express");
const os = require("os");
const cors = require("cors");
const app = express();
app.use(cors());
app.use("/", async (req, res) => {
    console.log(`I am sending a reponse ${os.hostname()}`);
    res.json({message: "OK, It works ...", hostname: os.hostname()})
})

app.listen(3000, () => console.log("Server listing on port 3000 !"))