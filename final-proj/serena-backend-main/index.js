import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();

//importing our database (serenadata-- this is important!)
import {db} from "./util/Firebaseinit.js";
import {collection, getDocs} from "firebase/firestore";

const app = express();
const port = 8080;

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
    })

);

app.get("/", async(req, res) => {
    res.send("Hello World! This is Serena's backend");
})

app.get("/serenadata", async (req, res) => {
    const collectionRef = collection(db, "serenadata");
    const collectionSnap = await getDocs(collectionRef);
    const docs = [];
    collectionSnap.forEach((doc) => {
        docs.push(doc.data());
    })
    res.send(docs);
});



//This line is important!!
app.listen(port, () => {
    console.log("Listening on port", port);
});