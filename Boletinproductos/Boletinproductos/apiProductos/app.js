const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
require('dotenv').config();
//Seguridad
const passport = require("passport");
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');
//Seguridad
//Ruta de Usuarios
const user_routes = require('./routes/users');
const products_routes = require('./routes/products')
const comments_products = require('./routes/comments')
//Middleware
const customMdw = require('./middleware/custom');
//Servicio de usuarios 
const UserService = require('./services/user')
const app = express()

passport.use(new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
    session: false
}, (username, password, done) => {
    let data = UserService.findUser({username : username});
    if (data === undefined) return done(null, false);
    else if (!bcrypt.compareSync(password, data.password)) {
        return done(null, false);
    }
    return done(null, data); //login ok
}));

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
opts.algorithms = [process.env.JWT_ALGORITHM];

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    console.log("ejecutando *callback verify* de estategia jwt");
    let data = UserService.findById(jwt_payload.sub);
    if (data === null)
        return done(null, false);
    else
        return done(null, data);
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/api/', user_routes)
app.use(passport.initialize())
app.use(customMdw.errorHandler);
app.use(customMdw.notFoundHandler);
app.use('/api/', products_routes);
app.use('/api/', comments_products);

module.exports = app
