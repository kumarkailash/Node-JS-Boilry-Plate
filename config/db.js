const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kailashkumar:<>@cluster0-kgr0j.mongodb.net/test?retryWrites=true&w=majority')

module.exports = mongoose;
