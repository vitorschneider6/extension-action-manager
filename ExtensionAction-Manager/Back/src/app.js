// Dependências
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config")

const app = express();
const router = express.Router();

// Conexão com o banco de dados MongoDB
mongoose.connect(config.conectionString);

// Carrega os Models
const Student = require("./models/student");
const Course = require("./models/course");
const User = require("./models/user");
const Servant = require("./models/servant");
const CourseCoordinator = require("./models/course_coordinator");
const ExtensionAction = require("./models/extension_action");
const Demand = require("./models/demand");
const Suggestion = require("./models/suggestion")

// Rotas
const index = require("./routes/index");
const authRoutes = require("./routes/authenticate-routes")
const StudentRoutes = require("./routes/student-routes");
const CourseRoutes = require("./routes/course-routes");
const UserRoutes = require("./routes/user-routes");
const ServantRoutes = require("./routes/servant-routes");
const CourseCoordinatorRoutes = require("./routes/course_coordinator-routes");
const ExtensionActionRoutes = require("./routes/extension_action-routes");
const DemandRoutes = require("./routes/demand-routes");
const SuggestionRoutes = require("./routes/suggestion-routes")

// BodyParser no app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:8080",
  })
);

// Uso das rotas no app
app.use("/", index);
app.use("/authenticate", authRoutes);
//app.use("/students", StudentRoutes);
app.use("/courses", CourseRoutes);
app.use("/users", UserRoutes);
//app.use("/servants", ServantRoutes);
app.use("/coordinators", CourseCoordinatorRoutes);
app.use("/actions", ExtensionActionRoutes);
app.use("/demands", DemandRoutes);
app.use("/suggestions", SuggestionRoutes)

module.exports = app;
