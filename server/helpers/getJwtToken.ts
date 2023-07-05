import jwt from 'jsonwebtoken';
// import 'dotenv/config'

const getJwtToken = (userId:any) => {
    return jwt.sign({userId: userId},"bishnu", {expiresIn: '3 day'})
}

export default getJwtToken;