const router = require('express').Router();
// User Model
const User = require('../../models/User');


// @route   POST api/users/signup
// @desc    Create An User
// @access  Public






router.post('/signup', (req, res, next) => {
    // const { body } = req;
    console.log(req.body)
   const body = req.body;
    console.log("response", body)
    let {
        first_name,
        last_name,
        password,
        email
    } = body;


    // let {
    //     email
    // } = body;

    if (!first_name) {
        return res.send({
            success: false,
            message: 'Error: First name cannot be blank.'
        });
    }

    if (!last_name) {
        return res.send({
            success: false,
            message: 'Error: Last name cannot be blank.'
        });
    }

    if (!email) {
        return res.send({
            success: false,
            message: 'Error: Email cannot be blank.'
        });
    }

    if (!password) {
        return res.send({
            success: false,
            message: 'Error: Password cannot be blank.'
        });
    }
    email = email.toLowerCase();
    email = email.trim();
    // Steps:
    // 1. Verify email doesn't exist
    // 2. Save
    User.find({
        email: email
    }, (err, previousUsers) => {
        if (err) {
            console.log("err")
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        else if (previousUsers.length > 0) {
            return res.send({
                success: false,
                message: 'Error: Account already exist.'
            });
        }

        // Save the new user
        const newUser = new User();
        newUser.first_name = first_name;
        newUser.last_name = last_name;
        newUser.email = email;
        newUser.password = newUser.generateHash(password);
        newUser.save((err, user) => {
            if (err) {
                console.log(err)
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }
            return res.send({
                success: true,
                message: 'Signed up'
            });
        });
    });
});

// @route   POST api/users/signin
// @desc    Create An UserSession
// @access  Public
router.post('/signin', (req, res, next) => {
    //const { body } = req;
    console.log(req.body)
    const body = req.body;
    console.log("response", body)
    let {
        password,
        email
    } = body;

    if (!email) {
        return res.send({
            success: false,
            message: 'Error: Email cannot be blank.'
        });
    }
    if (!password) {
        return res.send({
            success: false,
            message: 'Error: Password cannot be blank.'
        });
    }
    email = email.toLowerCase();
    email = email.trim();
    User.find({
        email: email
    }, (err, users) => {
        if (err) {
            console.log('err 2:', err);
            return res.send({
                success: false,
                message: 'Error: server error'
            });
        }
        if (users.length != 1) {
            return res.send({
                success: false,
                message: 'Error: Invalid Email'
            });
        }
        const user = users[0];
        if (!user.validPassword(password)) {
            return res.send({
                success: false,
                message: 'Error: Invalid Password'
            });
        }
        // Otherwise correct user
        const userSession = new UserSession();
        userSession.userId = user._id;
        userSession.save((err, doc) => {
            if (err) {
                console.log(err);
                return res.send({
                    success: false,
                    message: 'Error: server error'
                });
            }
            return res.send({
                success: true,
                message: 'Valid sign in',
            });
        });
    });
});



module.exports = router;