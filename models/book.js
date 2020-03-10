var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var booksSchema = new Schema({
isbn: String, //Code Book in mongo
title: String, //Name Book in mongo
price: Number //Price Book in mongo
});

module.exports =mongoose.model('books', booksSchema);
