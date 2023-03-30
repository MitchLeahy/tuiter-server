import express from 'express';
import exampleController from './controllers/example-controller.js';
import tuitsController from './controllers/tuits-controller/index.js';
import UserController from "./controllers/users/users-controller.js"
import cors from 'cors'
import mongoose from "mongoose"




const app = express();

// allows requests from any origin
//needs to be right here
app.use(cors());

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect(CONNECTION_STRING);

app.use(express.json());


exampleController(app);
UserController(app);
tuitsController(app);

// listens for requests on port 4000
app.listen(process.env.PORT || 4000);