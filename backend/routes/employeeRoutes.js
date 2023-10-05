const {Router} = require('express');
const Employ = require('../models/employee');


const router = Router();


router.post('/create', async(req, res)=>{
  try {
   const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const age = req.body.age;
  const city = req.body.city;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword
  const gender = req.body.gender;
  const state = req.body.state;
  const qualification = req.body.qualification;
  const email = req.body.email;
  const mobileNumber= req.body.mobileNumber;

  const Employee = new Employ({firstName, lastName, age, city, password, confirmPassword, gender, state, qualification, email, mobileNumber})
  const result = await Employee.save();
  res.json({Employ: result});
  } catch (error) {
    console.log(error);
  }
});

router.get('/fetch', async(req, res)=>{
    try {
        const allEmployee = await Employ.find();
        res.json({Employ: allEmployee});
    } catch (error) {
        return res.status(401).send({
            message: "Error",
            error:error
        })
    }
});

router.get('/fetch/:id', async(req, res)=>{
      const id = req.params.id;
    try {
        const employ = await Employ.findOne({_id: id});
        res.json(employ);
    } catch (error) {
        return res.status(401).send({
            message: "Error",
            error:error
        })
    }
});




router.put('/update/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        const updateData = req.body;
        const employ = await Employ.updateOne({ _id: id }, updateData);

        res.json(employ);
    } catch (error) {
        return res.status(401).send({
            message: "Error",
            error:error
        })
    }
});


router.delete('/delete/:id', async(req, res)=>{
    try {
        const id = req.params.id;
       
        await Employ.deleteOne({ _id: id });

        res.send({
            message: 'sucessfully deleted'
        });
    } catch (error) {
        return res.status(401).send({
            message: "Error",
            error:error
        })
    }
});

module.exports = router;