const mongoose = require('mongoose');

const URI = process.env.URI


mongoose.connect(URI).then(() => console.log("DB is UP")).catch(() => console.log(err));