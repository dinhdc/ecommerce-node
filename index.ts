import express, { Application } from "express";
import {json} from "body-parser";
import mongoose from "mongoose"
import routes from "./src/routes"

const app: Application = express();

app.use(json())
app.use("/", routes)

const uri: string = process.env.URI
mongoose.connect(uri).then(() => console.log("connected to database")).catch(error => console.log(error))
mongoose.set('toJSON', {
    virtuals: true,
    transform: (doc, converted) => {
        delete converted._id;
    }
});
const port = Number(process.env.PORT || 5000);
app.listen(port, () => {
    console.log(`Server running on ${port}`)
})