import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret: string = process.env.MY_SECRET_KEY || "placeholder-secret";

export function generateToken (data: any){
    return jwt.sign(data, secret, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
}

export function decryptToken (token: any){
    return jwt.verify(token, secret);
}