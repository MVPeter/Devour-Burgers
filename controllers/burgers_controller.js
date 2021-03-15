const express = require('express');

const router = express.Router()

const burger = require('..models/burger')

router.get('/', (req, res) => {
    burger.all((data) => {
        const burgerObject = {
            burgers: data,
        };
        console.table('burgerObject', burgerObject);
        res.render('index', burgerObject);
    });
});

router.post('/api/burger', (req, res) => {
    burger.create(['burger', 'eaten'], [req.body.burger, req.body.eaten], (result) => {
        res.json({ id: result.insertId });
    });
});

router.put('/api/burger/:id', (req, res) => {
    const 
})

module.exports = router;