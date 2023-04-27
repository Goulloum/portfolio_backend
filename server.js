const express = require("express");
const cors = require("cors");
const csrf = require("csurf");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const cookieParser = require("cookie-parser");

const app = express();

var corOption = {
  origin: "*",
};

// midelware(encordeur pour que mathieu pisse le lire ce robot)

app.use(cors(corOption));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// Route

const routerSituation = require("./routes/situationRoute.js");
app.use("/api/situation", routerSituation);
const routerUser = require("./routes/userRoute.js");
app.use("/api/user", routerUser);

const PORT = process.env.PORT || 8080;

//server

app.listen(PORT, () => {
  console.log(`server is running port ${PORT}`);
});
