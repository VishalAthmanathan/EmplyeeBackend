const db = require('../database/db');

const test = (req, res) => {
    console.log("Working");
    res.json("Backend working");
}

const addUser = (req,res) =>{
    const username = req.body.username;
    const id = req.body.id;
    const dept = req.body.department;
    const dob = req.body.dob;
    const gender = req.body.gender;
    const designation = req.body.designation;
    const salary = req.body.salary;
    // console.log(fullname,age,phonenum,mailid,password);
    let sql = 'INSERT into empdetails (employeename, employeeid, department, dateofbirth, gender, designation, salary) VALUES ($1, $2, $3, $4, $5, $6, $7)';
    const VALUES = [username,id,dept,dob,gender,designation,salary];
    db.query(sql, VALUES,(error) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: 'Server error' });
      }
      console.log("Data added successfully");
      res.status(200).json("Added to DB Successfully");
      // res.redirect()
      
    });
  }

module.exports = {
    test,
    addUser
  }