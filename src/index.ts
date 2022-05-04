import express from 'express'
import 'dotenv/config'
import { FeedbacksController } from './controllers/Feedbacks'

const app = express()
const PORT = process.env.PORT || 3333

app.use(express.json())

const controller = new FeedbacksController()

app.post('/feedback/create', controller.handle)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})