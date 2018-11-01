import express, {json} from 'express';
import bodyParser, {Options} from 'body-parser';
import cookieParser from 'cookie-parser';
const app= express();
const port = process.env.PORT || 5001;
import mongoose, {Schema, Model, model} from 'mongoose';
import User from '../db/userSchema';
import passport from 'passport';
import passportLocalMongoose from 'passport-local-mongoose';
import {Session} from 'inspector';
import PasswordJWT from 'passport-jwt';
import PasswordLocal from'passport-local'
import endPoints from '../endpoints';
import http from 'http';
import  '../register/jwtStategy';
import {mongo_serverAddress, mongo_serverPort} from '../configFile'
mongoose.connect(
    // 'mongodb://192.168.99.100:27017/chatDB', (error: any) => {
        'mongodb://'+mongo_serverAddress+':'+mongo_serverPort+'/AuthDB',{useNewUrlParser:true}, (error: any) => {
        if (error) {
            console.log('error');
            process.exit();
            return
        }
        else {
            console.log('db connected')
        }
    }
)

passport.use(User.createStrategy());
const passportExpressMiddleware = passport.initialize();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(passportExpressMiddleware);
app.use(cookieParser());
app.use('/api',endPoints)
const server = http.createServer(app);
server.listen(port,()=>console.log(`Listening on port ${port}`));