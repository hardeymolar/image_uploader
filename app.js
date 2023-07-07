const express = require('express');
const app = express();
const connectDB = require('./db/connect')
const router = require('./routes/router')



app.use(express.json())
app.get('/',(req,res)=>{
    res.send('home page')
});
app.use('/api/v1',router);

const start = async () => {
    try {
      await connectDB(process.env.MONGOURI);
      app.listen(3000, () => console.log(`app is listening on port 3000...`));
    } catch (error) {
      console.log(error);
    }
  };

  start();
