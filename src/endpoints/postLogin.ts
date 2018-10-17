
import express, { json } from 'express';
import bodyParser from 'body-parser';
const app = express();
import User from '../db/userSchema';
import passport from 'passport';
const router = express.Router();
import jwt from 'jsonwebtoken'; 
import {userQuery} from '../db/queryClass'

router.post('/logIn',passport.authenticate('local', { session: false }), async (req, res) => {
    console.log('got into login')
    const { _id, email,username } = req.user!;
    // const token= queryObject.logIn(_id,email,username)
    // const query = new userQuery()
    // const contacts = await query.findContacts(_id)
    // console.log('req user from login', req.user)
    // const contacts = await User.findOne({_id: req.user}, { contacts:1})
    const token =await jwt.sign({ _id}, "12345", { expiresIn: "24h" });
    console.log(token)
     res.cookie('CookieUser', token);
    // res.end()
    res.json(token)
});

export default router;
 