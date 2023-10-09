export const PORT = 5555;

import mongoose from "mongoose";

mongoose.connect(`mongodb://0.0.0.0:27017/book_store`);

const db = mongoose.connection;

db.on('error', console.log.bind(console, "Error connecting to database"));

db.once('open', function(){
	console.log("Connected to database:: MongoDB");
})

export default db;