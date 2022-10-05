const router = require('express').Router();
const User = require('../models/User');
const  { validateUserInput } = require('../utils/validator');

router.post('/register', async (req, res) => {
    
    const { validUsername, validEmail, validPassword } = validateUserInput(
        req.body.username,
        req.body.email,
        req.body.password
    );

    console.log(validUsername);
    console.log(validEmail);
    console.log(validPassword);

    if(validUsername && validEmail && validPassword ){
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const savedUser = await user.save();
        return res.status(200).send(savedUser);
    }
    catch(err) {
        return res.status(400).send(err);
    }

    } 
    // Case for invalid input.
    else {
        if(!validUsername){
            return res.status(400).send({
                message: 'Invalid username.'
            });
        }
        if(!validEmail){
            return res.status(400).send({
                message: 'Invalid e-mail adress.'
            });
        }
        if(!validPassword){
            return res.status(400).send({
                message: 'Invalid pasword.'
            });
        }
    }


});


module.exports = router;