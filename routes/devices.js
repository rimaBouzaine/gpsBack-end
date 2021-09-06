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

    let sql = "update device set name=?,imei=? where id=?",[];

    db.query(sql, function(err, data, fields) {
        if (err) throw err;
        res.json({
            status:200,
            message:data
        });
        
        });
    });


//delete 
    router.delete('/supp', function(req, res) {
    db.connect(function(err) {
        if (err) throw err;
        var sql = "DELETE FROM devices WHERE id = '987654321'";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Number of records deleted: " + result.affectedRows);
        });
      });
    });


<<<<<<< HEAD

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
=======
module.exports = router;  
>>>>>>> e019489530548a3ce803ccab3bc17be6f2437239
