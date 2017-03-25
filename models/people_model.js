var mongoose = require('mongoose');
Schema = mongoose.Schema;

var PeopleSchema = new Schema({
  id: Number,
  name: String,
  favoriteCity: String
});

mongoose.model('People', PeopleSchema);
