const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./dataBase/database");
const tarifaRouter = require("./routes/RouterTarifas");
const hotelRouter = require("./routes/RouterHotel");
const reservaRouter = require("./routes/RouterReservas");

var app = express();
const port = 3001;
//conexion a bd
connectDB();

// configuracion para uso de express
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
// Habilitar CORS para consumo de los
app.use(cors());

//ruta principal
app.get("/", (req, res) => {
  res.send("API de reservas hotel");
});

//uso de routes
app.use("/tarifas", tarifaRouter);
app.use("/hoteles", hotelRouter);
app.use("/reservas", reservaRouter);

app.listen(port, () => {
  console.log(`se desplego el servidor en el puerto 3001`);
});

