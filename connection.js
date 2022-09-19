const mongoose = require('mongoose');
const uri = 'mongodb+srv://leonidas:AgZCx2qpLqN0kD53@cluster0.l6x0pxk.mongodb.net/shortUrl?retryWrites=true&w=majority'
mongoose.connect(uri)

mongoose.connection.on('open', ()=> console.log('open connection-database') );

mongoose.connection.on('error', err => {console.log(err)});
