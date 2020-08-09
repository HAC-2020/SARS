const express = require("express");
const router = express.Router();
const Patient = require('../models/patientModel');

router.post('/auth', (req, res) => {
    const patient = new Patient(req.body);

    patient.save()
        .then((result) => {
            console.log(res);
            res.status(201).json({
                result: result
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        })
});

router.get('/', async function (req, res) {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients)
        console.log(patients)
    } catch (err) {
        console.log(err)
        res.status(500).json({
          error: err,
        })
    }
});

router.get('/:pin', function (req, res) {
    const pin = req.params.pin;

    console.log(pin);
    Patient.findOne({ pin: pin })
        .exec()
        .then(patient => {
            if (patient) {
                res.status(200).json(patient);
            } else {
                res.status(404).json({
                    message: "No valid patient found"
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;