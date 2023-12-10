import setupRoutes from '@/routes';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

const port = process.env.APP_PORT;
const app = express();

app.use(cors());
app.use(express.json());

setupRoutes(app);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
