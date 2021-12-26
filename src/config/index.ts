import dotenv from 'dotenv';
export const config ={
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    mongo:'mongodb://localhost:27017/bai1_fpt',
}