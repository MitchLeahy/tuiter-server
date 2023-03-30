import express from 'express';
import exampleController from './controllers/example-controller.js';
import tuitsController from './controllers/tuits-controller/index.js';
import UserController from "./controllers/users/users-controller.js"
import cors from 'cors'
import mongoose from "mongoose"




const app = express();


const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';

mongoose.connect(CONNECTION_STRING )
;
// mongoose.connect('mongodb+srv://Cluster65091:Amherstnh4@cluster65091.nebhxnq.mongodb.net/tuiter?retryWrites=true&w=majority')
//     .then( () => {
//         console.log('Connected to the database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. n${err}`);
//     })
//needs to be right here
app.use(cors());


app.use(express.json());


exampleController(app);
UserController(app);
tuitsController(app);

// listens for requests on port 4000
app.listen(process.env.PORT || 4000);