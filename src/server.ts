import { configDotenv } from 'dotenv';
import express from 'express';
import { connectDB } from './config/db.ts';

configDotenv();

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Yeooo! Man i'm working ");
});

(async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`CRACK_ANYTHING IS RUNNING ON PORT ${port}`);
  });
})();
