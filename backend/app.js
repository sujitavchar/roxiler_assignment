
import express from "express";
import cors from "cors";
import 'dotenv/config';
import {db} from './db.js'

const app = express();

app.use(express.json());
app.use(cors());