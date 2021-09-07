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
//update the name
router.put('/modifier:id', function(req, res,) {

  let id=  req.body['id'];
  let name=  req.body['name'];
  let imei=  req.body['imei'];


    let sql = "update device set name=?,imei=? where id=?";

    db.query(sql,[
      name,imei,id
          ], function(err, data, fields) {
        if (err) throw err;
        res.json({
            status:200,
            data:result,
            message:"user has been updated"
        });
        
        });
    });


//delete 
    router.delete('/supp', function(req, res) {
      let id=  req.body['id'];
        let sql = "DELETE FROM devices WHERE id = ?";
      db.query(sql,[
        id
            ], function(err, data, fields) {
          if (err) throw err;
          res.json({
              status:200,
              data:result,
              message:"user has been deleted"
          });
          });
    });


module.exports = router;  
