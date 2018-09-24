import app from './App'
import MomusBot from "./bot/MomusBot";

const port = process.env.PORT || 3000
const botToken = process.env.BOT_TOKEN || "697113317:AAH0l4NnH5tqpDvlsYJwET0WEFHPLxlfzWs"


app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
})


