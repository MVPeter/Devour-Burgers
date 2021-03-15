const connection = require('./connection.js');

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
const orm = {
    all(tableInput, colToSearch, valOfCol, orderCol) {
        const queryString = 'SELECT * FROM ?? WHERE ?? = ? ORDER BY ?? DESC';
        connection.query(
            queryString,
            [tableInput, colToSearch, valOfCol, orderCol],
            (err, result) => {
                if (err) throw err;
                console.log(result);
            }
        );
    },

    selectEaten(whatToSelect, table, orderCol) {
        const queryString = 'SELECT ?? FROM ?? ORDER BY ?? DESC';
        console.log(queryString);
        connection.query(
            queryString,
            [whatToSelect, table, orderCol],
            (err, result) => {
                if (err) throw err;
                console.log(result);
            }
        );
    },

    update(tableInput, objColVals, condition, valOfCol) {
        const queryString = 'UPDATE ?? SET ?? WHERE ?? = ?';
        console.log(queryString);
        connection.query(queryString,
            [tableInput, objColVals, condition, valOfCol],
            (err, result) => {
                if (err) throw err;
                console.log(result);

            })
    }
};

module.exports = orm;
