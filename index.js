import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Mock authentication endpoint
app.post("/authenticate", (req, res) => {
  const { username, password } = req.body;
  if (username === "testuser" && password === "testpassword") {
    res.json({
      auth: {
        token:
          "eyJhbGciOiJIUzUxMiJ9.fakeToken.LBDdM54iETy7wCVULzPWs8W95yTi88lZLihj8pFZH-zQBFWJ3r2xfcalQYXVdsPj8CuCSg6zbsr2AMc-T-q2Sw",
        expiration: "2023-07-07 09:26:40",
        username: "XXXXXXXXX",
        rol: [
          {
            authority: "ROLE_USER",
          },
        ],
      },
      mensaje: {
        codigo: "000",
        mensaje: "AUTENTICACIÓN CORRECTA",
      },
    });
  } else {
    res.status(401).json({
      mensaje: {
        codigo: "001",
        mensaje: "AUTENTICACIÓN FALLIDA",
      },
    });
  }
});

// Mock data retrieval endpoint
app.post("/getdata", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (
    token ===
    "eyJhbGciOiJIUzUxMiJ9.fakeToken.LBDdM54iETy7wCVULzPWs8W95yTi88lZLihj8pFZH-zQBFWJ3r2xfcalQYXVdsPj8CuCSg6zbsr2AMc-T-q2Sw"
  ) {
    res.json({
      codigo: "000",
      mensaje: "CONSULTA REALIZADA",
      ciudadano: {
        NUI: "0918782764",
        NOMBRE: "QUINDE GARZON ROBERTO ANDRES",
        SEXO: "HOMBRE",
        FECHANACIMIENTO: "05/02/1990",
        FECHACEDULACION: "28/08/2009",
        INSTRUCCION: "SUPERIOR",
        PROFESION: "ESTUDIANTE",
        NACIONALIDAD: "ECUATORIANA",
        CONDICIONCEDULADO: "CIUDADANO",
        ESTADOCIVIL: "SOLTERO",
        NOMBREPADRE: "ROBERTO VICENTE QUINDE",
        NOMBREMADRE: "NELLY ELENA GARZON FIERRO",
      },
    });
  } else {
    res.status(403).json({
      codigo: "002",
      mensaje: "TOKEN INVÁLIDO",
    });
  }
});

app.listen(8800, () => {
  console.log("Connected on port 8800");
});

// Default route
app.get("/", (req, res) => {
  res.send("Hello World");
});
