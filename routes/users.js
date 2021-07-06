const router = require("express").Router();
const { request, response } = require("express");
const User = require("../models/userModel");

router.post('/login', (request, response) =>{
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

module.exports = router
