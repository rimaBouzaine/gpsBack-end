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


////////// PUT ///////////
router.put("/devices/:deviceId",function(id,data,res){
  sql.query(`update devices set name= ?,umei=?, where id =?`,[
    data['name'],data["imei"],id
  ],
  (err,res)=>{
    if (err) throw err;


  }
  );

})

module.exports = router;