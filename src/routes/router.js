const express = require('express');
const router = express.Router();
const mysqlConnection = require('../dbConnection');
const { isMutant, verify } = require('../detector')

router.post('/mutant', (req, res) => {

    const { dna } = req.body;

    if (dna && !verify(dna)) {
        res.sendStatus(400);
    } else {
        const ismutant = isMutant(dna);
        insertHuman(JSON.stringify(req.body), ismutant);
        return ismutant ? res.sendStatus(200) : res.sendStatus(403);
    }
});

router.get('/stats', (req, res) => {
    const query = 'select sum(mutant) as count_mutant_dna,count(*) as count_human_dna, sum(mutant)/count(*) as ratio from humans_dna';
    mysqlConnection.query(query, (err, rows) => {
        if (!err) {
            res.json(rows);
        }
    });

})

function insertHuman(dna, ismutant) {
    const query = 'INSERT INTO humans_dna (dna,mutant) values (?,?)';
    mysqlConnection.query(query, [dna, ismutant], (err) => {
        if (err) {
            console.log(err);
        }
    })
}

module.exports = router;