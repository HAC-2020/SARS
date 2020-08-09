const express = require("express");
const router = express.Router();
const Record = require('../models/recordModel');

router.post('/', (req, res) => {
    const record = new Record(req.body);

    record.save()
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
        });
});

router.get('/get', async (req, res) => {
    try {
        const records = await Record.find();
        res.status(200).json(records);
        console.log(records);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
        });
    }
});

module.exports = router;