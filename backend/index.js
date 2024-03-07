import express from "express";
import cors from "cors";
import PatientRoute from "./routes/PatientRoute.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(PatientRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
