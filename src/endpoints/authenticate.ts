 // imports
import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import User from '../db/userSchema';
import passport from 'passport';
const router = express.Router();
import jwt, { verify } from 'jsonwebtoken';
import passportJWT from 'passport-jwt';

//
router.use('/authenticate',  passport.authenticate('jwt', {session:false}), async(req,res)=>{
// const dataFromCoockie = req.user.email;
console.log('into authenticate')
console.log(req.cookies);

console.log(req.user)
// res.send(dataFromCoockie);
const dataFromProfile = await User.findOne({_id: req.user}, {username:1, email:1, contacts:1, language:1})
console.log('datafromProfile', dataFromProfile)
res.json(dataFromProfile);
});
export default router;