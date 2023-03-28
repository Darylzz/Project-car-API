const express = require("express");
const cors = require("cors");
const notFoundMiddleware = require("./middleware/notFound");
const errorMiddleware = require("./middleware/error");
const authenticate = require("./middleware/authenticate");
const authRoute = require("./routes/authRoute");
const carRoute = require("./routes/carRoute");
// const { sequelize } = require("./models");

const app = express();

// sequelize.sync({ force: true });
app.use("/public", express.static("public"));
app.use(express.json());
app.use(cors());

app.use("/auth", authRoute);
app.use("/car", authenticate, carRoute);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(8000, () => console.log("Start server at port 8000"));
