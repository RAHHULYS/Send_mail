const mongoose = require('mongoose')

export const connectDB = (url) =>{
  mongoose.connect(url)
  .then(()=>{
    console.log('MongoDB connected')
  })
  .catch(err =>{
    console.log(err.message);
  })
}