import createServer from "./app.js"
import dotenv from "dotenv" 
dotenv.config()

const port = process.env.PORT || 3002

const app = createServer()
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  })

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })