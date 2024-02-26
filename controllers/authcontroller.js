// const db = require('../database/db');

// const test = (req, res) => {
//     console.log("Working");
//     res.json("Backend working");
// }

// const addUser = (req,res) =>{
//     const username = req.body.username;
//     const id = req.body.id;
//     const dept = req.body.department;
//     const dob = req.body.dob;
//     const gender = req.body.gender;
//     const designation = req.body.designation;
//     const salary = req.body.salary;
//     const contact =req.body.contact;
//     const address = req.body.address;
//     const shift = req.body.Shift;
//     console.log(username,id,dept,dob,gender,designation,salary,contact,address,shift);
//     let sql = 'INSERT into empdetails (employeename, employeeid, department, dateofbirth, gender, designation, salary, contact, address, shift) VALUES ($1, $2, $3, $4, $5, $6, $7,$8, $9, $10)';
//     const VALUES = [username,id,dept,dob,gender,designation,salary,contact,address,shift];
//     db.query(sql, VALUES,(error) => {
//       if (error) {
//         console.log(error);
//         return res.status(500).json({ error: 'Server error' });
//       }
//       console.log("Data added successfully");
//       res.status(200).json("Added to DB Successfully");
//       // res.redirect()
      
//     });
//   }

//   const viewUser = (req, res) => {
//     const sql = 'SELECT * FROM empdetails';
  
//     db.query(sql, (error, results) => {
//       if (error) {
//         console.error('Error executing query:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//         return;
//       }
//       console.log(results.rows);
//       res.status(200).json(results.rows);
//     });
//   };

// module.exports = {
//     test,
//     addUser,
//     viewUser
//   }

const supabase = require('../database/db');

const test = (req, res) => {
    console.log("Working");
    res.json("Backend working");
};

const addUser = async (req, res) => {
    try {
        const { username, id, department, dob, gender, designation, salary, contact, address, Shift } = req.body;

        const { data, error } = await supabase.from('empdetails').upsert([
            {
                employeename: username,
                employeeid: id,
                department,
                dateofbirth: dob,
                gender,
                designation,
                salary,
                contact,
                address,
                Shift
            }
        ]);

        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Server error' });
        }

        console.log("Data added successfully");
        res.status(200).json("Added to DB Successfully");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

const viewUser = async (req, res) => {
    try {
        const { data, error } = await supabase.from('empdetails').select('*');

        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    test,
    addUser,
    viewUser
};
