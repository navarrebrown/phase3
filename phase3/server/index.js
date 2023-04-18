const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'firstever416',
    database: 'project1',
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/retrieve/affiliatedwith', (req,res)=> {
    const sqlSelect = 'SELECT * FROM AffiliatedWith';
    db.query(sqlSelect, (err, result) =>{
        console.log(err);
        res.send(result);
    });
});

app.get('/retrieve/appointment', (req,res)=> {
    const sqlSelect = 'SELECT * FROM Appointment';
    db.query(sqlSelect, (err, result) =>{
        console.log(err);
        res.send(result);
    });
});

app.get('/retrieve/department', (req,res)=> {
    const sqlSelect = 'SELECT * FROM Department';
    db.query(sqlSelect, (err, result) =>{
        console.log(err);
        res.send(result);
    });
});

app.get('/retrieve/medication', (req,res)=> {
    const sqlSelect = 'SELECT * FROM Medication';
    db.query(sqlSelect, (err, result) =>{
        console.log(err);
        res.send(result);
    });
});

app.get('/retrieve/nurse', (req,res)=> {
    const sqlSelect = 'SELECT * FROM Nurse';
    db.query(sqlSelect, (err, result) =>{
        console.log(err);
        res.send(result);
    });
});

app.get('/retrieve/oncall', (req,res)=> {
    const sqlSelect = 'SELECT * FROM OnCall';
    db.query(sqlSelect, (err, result) =>{
        console.log(err);
        res.send(result);
    });
});

app.get('/retrieve/patient', (req,res)=> {
    const sqlSelect = 'SELECT * FROM Patient';
    db.query(sqlSelect, (err, result) =>{
        console.log(err);
        res.send(result);
    });
});

app.get('/retrieve/physician', (req,res)=> {
    const sqlSelect = 'SELECT * FROM Physician';
    db.query(sqlSelect, (err, result) =>{
        console.log(err);
        res.send(result);
    });
});

app.get('/retrieve/prescibes', (req,res)=> {
    const sqlSelect = 'SELECT * FROM Prescibes';
    db.query(sqlSelect, (err, result) =>{
        console.log(err);
        res.send(result);
    });
});

app.get('/retrieve/procedure', (req,res)=> {
    const sqlSelect = 'SELECT * FROM Procedure';
    db.query(sqlSelect, (err, result) =>{
        console.log(err);
        res.send(result);
    });
});

app.get('/retrieve/room', (req,res)=> {
    const sqlSelect = 'SELECT * FROM Room';
    db.query(sqlSelect, (err, result) =>{
        console.log(err);
        res.send(result);
    });
});

app.get('/retrieve/stay', (req,res)=> {
    const sqlSelect = 'SELECT * FROM Stay';
    db.query(sqlSelect, (err, result) =>{
        console.log(err);
        res.send(result);
    });
});

app.get('/retrieve/undergoes', (req,res)=> {
    const sqlSelect = 'SELECT * FROM Undergoes';
    db.query(sqlSelect, (err, result) =>{
        console.log(err);
        res.send(result);
    });
});

app.post('/insert/affliated', (req,res)=> {
    const physID = req.body.physID
    const deptID = req.body.deptID
    const sqlInsert = 'INSERT INTO AffiliatedWith (physicianID, departmentID) VALUES (?,?);'
    db.query(sqlInsert, [physID,deptID], (err, result)=> {
        console.log(err);
    })
})

app.post('/insert/appointment', (req,res)=> {
    const appID = req.body.appID
    const patientID = req.body.patientID
    const nurseID = req.body.nurseID
    const physID = req.body.physID
    const startDate = req.body.startDate
    const endDate = req.body.endDate
    const sqlInsert = 'INSERT INTO Appointment (appID, patientID, nurseID, physicianID, startDateTime, endDateTime) VALUES (?,?,?,?,?,?);'
    db.query(sqlInsert, [appID,patientID,nurseID,physID,startDate,endDate], (err, result)=> {
        console.log(err);
    })
})

app.post('/insert/medication', (req,res)=> {
    const medID = req.body.medID
    const name = req.body.name
    const sqlInsert = 'INSERT INTO Medication (medID, name) VALUES (?,?);'
    db.query(sqlInsert, [medID,name], (err, result)=> {
        console.log(err);
    })
})

app.post('/insert/nurse', (req,res)=> {
    const id = req.body.id
    const name = req.body.name
    const pos = req.body.pos
    const ssn = req.body.ssn
    const sqlInsert = 'INSERT INTO Nurse (nurseID, name, position, ssn) VALUES (?,?,?,?);'
    db.query(sqlInsert, [id,name,pos,ssn], (err, result)=> {
        console.log(err);
    })
})

app.post('/')

app.listen(3001, ()=> {
    console.log('running on port 3001');
})