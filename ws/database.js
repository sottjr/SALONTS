const mongoose = require('mongoose');

const URI = process.env.URI


// MONGO DB ATT Não utiliza-se mais.
//https://mongoosejs.com/docs/5.x/docs/deprecations.html
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);

mongoose.connect(URI).then(() => console.log("DB is UP")).catch(() => console.log(err));