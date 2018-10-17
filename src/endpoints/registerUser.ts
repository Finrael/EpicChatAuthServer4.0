import express, {json} from 'express';
import bodyParser from 'body-parser';
const app = express();
import User from '../db/userSchema';
// import complementaryInfo from './registerUserCompInfo';
const router = express.Router();

router.post('/registerUser', (req,res)=>{
    console.log('it went in', req.body)
    
    let post = new User({
        email:req.body.email,

    });
    post.setPassword(req.body.password, function (err,user){

        if(err){
            return res.status(500).end("Could not set password");
        }
        user.save(function (err:any){
            if (err){
                res.status(500).end("server error while saving");
                console.log('error on saving',err)
                throw err;
            }else{
                console.log("user saved successfully")
                
                res.end();
                // router.use(complementaryInfo);
            }
        })
    });
});
export default router;