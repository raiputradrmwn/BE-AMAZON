const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const data = [
  {
    id: 1,
    nama: "junaidi",
    provinsi: "sulawesi tengah",
    kabupaten: "parigi moutong",
    desa: "moubang",
  },
  {
    id: 2,
    nama: "Putra Alpa",
    provinsi: "DKI jakarta",
    kabupaten: "Depok",
    kecamatan: "margonda",
    desa: "desa kami",
  },
  {
    id: 3,
    nama: "Rakha Fabianto",
    provinsi: "yogyakarta",
    kabupaten: "kulon progo",
    kecamatan: "wates",
    desa: "banyu wangi",
  },
  {
    id: 4,
    nama: "Ilham Sadewo",
    provinsi: "jawa barat",
    kabupaten: "bandung",
    kecamatan: "Babakan Ciparay",
    desa: "Margasuka",
  },
];

app.get("/api", (req, res) => {
  res.json(data);
});

// Search route
app.get("/api/:nama", (req, res) => {
  const requestedNama = req.params.nama;
  const foundData = data.find(item => item.nama === requestedNama);
  
  if (foundData) {
    res.json(foundData);
  } else {
    res.status(404).json({ message: "Data not found" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
