var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
const uri = '';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));
