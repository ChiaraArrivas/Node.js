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

app.use(morgan("dev"))

app.get("/api/planets", (req, res) => {
    res.status(200).json({ planets: planets });
});

app.get("/api/planets/:id", (req, res) => {
    const { id } = req.params;
    const planet = planets.find(i => i.id === Number(id));
    res.status(200).json({ planet: planet });
});

app.listen(port, function () {
    console.log(`server running on port http://localhost:${port}`);
})