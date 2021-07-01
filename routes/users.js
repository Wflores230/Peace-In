const router = require("express").Router();
const { request, response } = require("express");
const User = require("../models/userModel");

router.post('/signup', (req, res) =>{
    const signedUpUser = new User({
        fullname:request.body.fullname,
        username: request.body.username,
        email:request.body.email,
        password:request.body.password
    })
    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
});

router.get('/signin')

module.exports = router
