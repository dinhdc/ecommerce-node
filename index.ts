import express, { Application } from "express";
import {json} from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv"
import routes from "./src/routes";

dotenv.config();

const app: Application = express();

app.use(json())
app.use("/", routes)

const uri: string = process.env.URI
mongoose.connect(uri).then(() => console.log("connected to database")).catch(error => console.log(error))

// remove _id in object
mongoose.set('toJSON', {
    virtuals: true,
    transform: (doc, converted) => {
        delete converted._id;
        delete converted.__v;
    }
});

const port = Number(process.env.PORT || 5000);
app.listen(port, () => {
    console.log(`Server running on ${port}`)
})