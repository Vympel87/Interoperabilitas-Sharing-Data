import express from "express";
import {
    createPatient,
    getPatients,
    getPatientsById,
    updatePatient,
    deletePatient
} from "../controller/PatientController.js";

const router = express.Router();

router.get('/patients', getPatients);

router.get('/patients/:id', getPatientsById);

router.post('/patients', createPatient);

router.put('/patients/:id', updatePatient);

router.delete('/patients/:id', deletePatient);

export default router;