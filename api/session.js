const {models} = require('../models');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

/*
 * Configure Passport: local strategy.
 *
 * Searches a user with the given username, and checks that the password is correct.
 *
 * If the authentication is correct, then it invokes done(null, user).
 * If the authentication is not correct, then it invokes done(null, false).
 * If there is an error, then it invokes done(error).
 */
passport.use(new LocalStrategy(
    async (email, password, done) => {
        console.log('USE LOCAL STRATEGY')
        try {
            const user = await models.User.findOne({where: {email}});
            if (user && user.verifyPassword(password)) {
                done(null, user);
            } else {
                done(null, false);
            }
        } catch (error) {
            done(error);
        }
    }
));

/*
 * Serialize user to be saved into req.session.passport.
 * It only saves the id of the user.
 */
passport.serializeUser((user, done) => {
    done(null, user.id);
});


/*
 * Deserialize req.session.passport to create the user.
 * Find the user with the serialized id.
 */
passport.deserializeUser(async (id, done) => {
    try {
        const user = await models.User.findByPk(id);
        done(null, user);
    } catch (error) {
        done(error);
    }
});

// POST /login   -- Create the session if the user authenticates successfully
exports.create = passport.authenticate(
    'local'
);

// This variable contains the maximum inactivity time allowed without
// making requests.
// If the logged user does not make any new request during this time,
// then the user's session will be closed.
// The value is in milliseconds.
// 1 minute
const maxIdleTime = (60*1000);
// 1 day.
//const maxIdleTime = 24*60*(60*1000);

// Middleware to create req.session.loginExpires, which is the current inactivity time
// for the user session.
exports.createLoginExpires = (req, res, next) => {
    console.log('CREATE LOGIN EXPIRES')
    date = Date.now()
    req.session.loginExpires =  date + maxIdleTime;

    res.send('Session created: ' + date)
    res.send('Session expires: ' + date + maxIdleTime)
    res.send(req.body)
};

// Middleware used to check the inactivity time.
// If the inactivity time has been exceeded, then the user session is destroyed.
exports.checkLoginExpires = (req, res, next) => {

    if (req.session.loginExpires) { // There exist a user session
        if (req.session.loginExpires < Date.now()) { // Expired

            delete req.session.loginExpires;
            req.logout(); // Passport logout

            // Delete req.loginUser from the views
            delete res.locals.loginUser;

            req.send('User session has expired.');
        } else { // Not expired. Reset value.
            req.session.loginExpires = Date.now() + maxIdleTime;
        }
    }
    // Continue with the request
    next();
};

// DELETE /login   --  Close the session
exports.destroy = (req, res, next) => {

    delete req.session.loginExpires;
    req.logout();  // Passport logout
};