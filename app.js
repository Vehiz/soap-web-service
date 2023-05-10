
import express from 'express'
import countryRouter from './src/route/route.js'
import cors from 'cors'


const createServer = () => {
  const app = express()

  app.use(express.json())
     .use(express.urlencoded({ extended: true }))
     .use('/api', countryRouter)
     .use(cors())

     return app

}

export default createServer







  
