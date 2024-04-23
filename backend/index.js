const express = require("express");
const app = express();
const rootRouter = require("./routes");
const cors = require('cors')
const bodyParser = require("body-parser");
app.use(cors())
app.use(bodyParser.json());
app.use("/api/v1",rootRouter)
const PORT = 3000;
app.listen(PORT)