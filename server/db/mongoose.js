var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
const uri = 'mongodb+srv://Manu:OO2uiYHpd40korRi@task.dne6vnr.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));
