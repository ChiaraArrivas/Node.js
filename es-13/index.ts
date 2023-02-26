import express from "express";
import "express-async-errors";
import morgan from "morgan";
import {
    getAll,
    getOneById,
    create,
    updateById,
    deleteById
} from "./controllers/planets";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.SERVER;

const app = express();
app.use(express.json());

app.use(morgan("dev"))

app.get("/api/planets", getAll);

app.get("/api/planets/:id", getOneById);


app.post("/api/planets", create);

app.put("/api/planets/:id", updateById);

app.delete("/api/planets/:id", deleteById)

app.listen(port, function () {
    console.log(`server running on port http://localhost:${port}`);
})