import { response } from "express";
import Patient from "../models/PatientModel.js";

export const getPatients = async (req, res) => {
    try {
        const response = await Patient.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.messege);
    }
}

export const getPatientsById = async (req, res) => {
    try {
        const response = await Patient.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.messege);
    }
}

export const createPatient = async (req, res) => {
    try {
        await Patient.create(req.body);
        res.status(201).json({msg: "Patient Created"})
    } catch (error) {
        console.log(error.messege);
    }
}

export const updatePatient = async (req, res) => {
    try {
        await Patient.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Patient Updated"})
    } catch (error) {
        console.log(error.messege);
    }
}

export const deletePatient = async (req, res) => {
    try {
        await Patient.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Patient Deleted"})
    } catch (error) {
        console.log(error.messege);
    }
}