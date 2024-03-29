import "reflect-metadata"
import "express-async-errors"
import express from "express"
import router from "./routes"
import { handleErrors } from "./AppError"


const app = express()
app.use(express.json())

app.use('', router)

app.use(handleErrors)

export default app