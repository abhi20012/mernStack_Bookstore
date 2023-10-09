import express, { response } from "express";
import { PORT } from "./config.js";
import booksRoute from './routes/booksRoutes.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (request, response) => {
	return response.status(234).send("Welcome to MERN Stack");
})

app.use('/books', booksRoute);


app.listen(PORT, () => {
	console.log(`App is listening on port: ${PORT}`);
})

