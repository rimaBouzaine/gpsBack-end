const express = require('express'),
  router = express.Router();

// get user lists
router.get('/list', function(req, res) {
  let sql = `SELECT * FROM device`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "devices lists retrieved successfully"
    })
  })
});





// create new user
router.post('/new', function(req, res) {
  let sql = `INSERT INTO device(name,imei) VALUES (?)`;
  let values = [
    req.body.name,
    req.body.imei,
  ];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "New user added successfully"
    })
  })
});

module.exports = router;