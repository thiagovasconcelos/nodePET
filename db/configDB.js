require("dotenv").config()

const DB_PASS = process.env.PASSWORD
const DB_CONNECT = `mongodb+srv://thiagovasconcelos: ${DB_PASS} @clusteraulapet.xcgpxj8.mongodb.net/?retryWrites=true&w=majority`

module.exports = DB_CONNECT