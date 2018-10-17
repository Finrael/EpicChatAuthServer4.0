// import generateUser from './authenticate';
import postLogin from './postLogin';
import getProfile from './authenticate'
import registerUser from './registerUser'
import {Router} from 'express'
const router = Router();

router.use(registerUser)
router.use(postLogin);
router.use(getProfile);


export default router;

