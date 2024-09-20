import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();
import {db} from "./util/FirebaseInit.js";
import {collection, getDocs} from "firebase/firestore";

const app = express();
const port = 8080;

app.use(express.json());
app.use (
    cors ({
        origin: "http://localhost:3000"
    })
);

app.get("/", async(req, res) => {
    res.send("Hello World!");
});

app.get("/students", async (req, res) => {
    
    //get reference to the Students collection
    const collectionRef = collection(db, "students");
    //Get all docs from the collection
    const collectionSnap = await getDocs(collectionRef);
    const docs = []
    collectionSnap.forEach((doc) => {
        docs.push(doc.data())
    })

    res.send(docs);
});

app.listen(port, () => {
    console.log("Listening on port", port);
});