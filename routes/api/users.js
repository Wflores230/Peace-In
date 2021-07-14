const router = require('express').Router();
// User Model
const User = require('../../models/User');
const UserSession = require('../../models/UserSession')

router.get('/', (req, res) => {
    User.find()
        .sort({ date: -1 })
        .then(users => res.json(users))
});


router.get('/user/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
});


router.get('/token/:id', (req, res) => {
    UserSession.findById(req.params.id)
        .then(user => res.json(user))
});


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
            console.log(err);
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

router.get('/verify', (req, res, next) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // Verify the token is one of a kind and it's not deleted.
    UserSession.find({
        _id: token,
        isDeleted: false
    }, (err, sessions) => {
        if (err) {
            console.log(err);
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        if (sessions.length != 1) {
            return res.send({
                success: false,
                message: 'Error: Invalid'
            });
        }
        else {
            // DO ACTION
            return res.send({
                success: true,
                message: 'Good'
            });
        }
    });
});

router.get('/logout', (req, res, next) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // ?token=test
    // Verify the token is one of a kind and it's not deleted.
    UserSession.findOneAndUpdate({
        _id: token,
        isDeleted: false
    },
        {
            $set: {
                isDeleted: true
            }
        }, null, (err, sessions) => {
            if (err) {
                console.log(err);
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }
            return res.send({
                success: true,
                message: 'Good'
            });
        }
    );
});

router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


router.delete('/token/:id', (req, res) => {
    UserSession.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;