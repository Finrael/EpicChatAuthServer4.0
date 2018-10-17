import User from '../db/userSchema';
import jwt from 'jsonwebtoken'; 
export class userQuery  {
    async   findEmail (_id:string){
        const userData = await User.findOne({_id: _id},{email:1})
        return userData
    }
   static async findUsername(_id:string){
        const userData = await User.findOne({_id: _id},{username:1})
        return userData
    }
    async findContacts(_id:string){
        const userData = await User.findOne({_id: _id},{contacts:1})
        return userData
    }
    
}