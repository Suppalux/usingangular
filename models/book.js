var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var booksSchema = new Schema({
isbn: String,
title: String,
price: Number
});

module.exports =mongoose.model('books', booksSchema);
