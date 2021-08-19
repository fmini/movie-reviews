import app from './server'
import mongodb from 'mongodb'
import dotenv from 'dotenv'

// Connect to DB cluster and call functions that access the DB
async function main(){
  // load the environment variables 
  dotenv.config()

    // Create an instance of the DB client and pass in the URI from .env file
    const client = new mongodb.MongoClient(process.env.MOVIEREVIEWS_DB_URI)
    // Get the port frome .env or default to port 8000
    const port = process.env(PORT || 8000)

    // Connect to the DB and start server or catch error if any
    try {
      // Connect to the MongoDB cluster
      await client.connect()

      // Start the web server after connection
      app.listen(port, () => console.log(`server is running on ${port}`))
    } catch (e) {
      console.error(e)
      process.exit(1)
    }
}

// Call the main function above and log errors to the console.
main().catch(console.error)