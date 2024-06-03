import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors'

import connectDB from './db/connect.js';


dotenv.config({ path: './.env' })

connectDB();
const app = express();


app.use(cors({
    origin: 'https://today-q-forntend.vercel.app/', // Replace with your local development URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


// import all routes

import userRouter from './routes/userRoutes.js';
import contentRouter from './routes/contentRoutes.js'
import cartRoutesRoute from './routes/cartRoutes.js'

app.get("/" , (req, res) => {
    res.send("<h1>Hello </h1>");
    res.end();
});
app.use('/api/user', userRouter)
app.use('/api/content', contentRouter)
app.use('/api/payment', cartRoutesRoute)



app.listen(process.env.PORT, () => {
    console.log(`Server is running at Port ${process.env.PORT}`);
})
