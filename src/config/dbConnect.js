import mongoose from "mongoose";

mongoose.connect("mongodb+srv://carolinems23:Kuhjyj2z@cluster0.fd86k.mongodb.net/Alura-node");

let db = mongoose.connection

export default db