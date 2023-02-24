const express = require("express");
const expressAsyncError = require("express-async-errors");
const morgan = require("morgan");
require("dotenv").config();

const port = process.env.SERVER;

let planets = [
    {
        id: 1,
        name: "Earth",
    },
    {
        id: 2,
        name: "Mars",
    }
];

const app = express();
app.use(express.json());

app.use(morgan("dev"))

app.get("/api/planets", (req, res) => {
    res.status(200).json({ planets: planets });
});

app.get("/api/planets/:id", (req, res) => {
    const { id } = req.params;
    const planet = planets.find(i => i.id === Number(id));
    res.status(200).json({ planet: planet });
});

app.post("/api/planets", (req, res) => {
    const { id, name } = req.body;
    const newPlanet = { id, name };
    planets = [...planets, newPlanet];

    console.log(planets);

    res.status(201).json({ msg: "The planet was created." })
});

app.put("/api/planets/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    planets = planets.map(p => p.id === Number(id) ? ({ ...p, name }) : p);

    console.log(planets);

    res.status(200).json({ msg: "The planet was updated" })
});

app.delete("/api/planets/:id", (req, res) => {
    const { id } = req.params;
    planets = planets.filter(p => p.id !== Number(id));

    res.status(200).json({ msg: "The planet was deleted" })
})

app.listen(port, function () {
    console.log(`server running on port http://localhost:${port}`);
})