import User from '../db/userSchema';
import jwt from 'jsonwebtoken'; 
export const queryObject = {
    // logIn: function async (_id:string,email:string,username:string){
    //     // console.log('req user from login', req.user)
    //     const contacts = await User.findOne({_id: _id}, { contacts:1})
    //     const token =await jwt.sign({ _id, email, username, contacts }, "12345", { expiresIn: "24h" });
    //     console.log(token)
    //     return token
    //     //  res.cookie('CookieUser', token);
    //     // // res.end()
    //     // res.json(token)
    // }
}