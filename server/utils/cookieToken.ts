import {  Response  } from 'express';

import getJwtToken from '../helpers/getJwtToken';


const cookieToken = (user:any, res:Response) => {
    console.log('user.id',user.id)
    const token = getJwtToken(user.id);
    const options = {
        expires: new Date(
            Date.now() + 3 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }
    user.password = undefined;
    res.status(200).cookie('token', token, options).json({
        success: true,
        token,
        user
    })


}
export default cookieToken